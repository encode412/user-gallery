/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  margin-top: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 5px;
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
const Button = styled.button`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

function DropBox({ error, onDrop }) {
  // const { isD} = useDropzone()
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept: isdragaccept,
    isFocused: isfocused,
    isDragReject: isdragreject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  const lists = acceptedFiles.map((list) => (
    <>
      {error !== null && (
        <li key={list.path}>
          <span>Last Uploaded: </span>
          {list.path} - {list.size} bytes
        </li>
      )}
    </>
  ));
  return (
    <>
      {" "}
      <section className='dropbox'>
        <Container
          // isdragaccept={isdragaccept ? isdragaccept : null}
          // isfocused={isfocused ? isfocused : null}
          // isdragreject={isdragreject ? isdragreject : null}
         {...getRootProps(isdragaccept, isfocused, isdragreject )}
         >
          <input {...getInputProps()} />
          <p>Drag and drop your image here</p>
          {/* <Button type="B" className="btn" onClick={open}>
            Click to select file
          </Button> */}
        </Container>
      </section>
      <aside>
        <h4>List</h4>
        <p>{lists}</p>
      </aside>
    </>
  );
}
export default DropBox;
