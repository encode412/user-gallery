/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components'

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

function DropBox({ error, onDrop }) {  
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const lists = acceptedFiles.map((list) => (
    <>
    
   { (error !== null) && <li key={list.path}>
    <span>Last Uploaded: </span>
      {list.path} - {list.size} bytes
    </li>}
    </>
  ));
  return (
    <>
      {' '}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" className="btn" onClick={open}>
            Click to select file
          </button>
        </Container>
      </section>
      <aside>
        <h4>List</h4>
        <p>{lists}</p>
      </aside>
      {/* <style jsx>
        {`
        .dropbox {
         flex: 1;
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 40px;
         border-width: 2px;
         border-radius: 10px;
         border-color: ${(props) => getColor(props)};
         border-style: dashed;
         background-color: #fafafa; 
         color: black;
         font-weight: bold;
         font-size: 1.4rem;
         outline: none;
         transition: border 0.24s ease-in-out;
        }
        
        `}

        
      </style> */}
    </>
  );
}
export default DropBox;