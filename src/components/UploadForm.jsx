/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ProgressBar from "./ProgressBar";
import DropBox from "./Dropbox";

const UploadForm = () => {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [tag, setTag] = useState("");
  const type = ["image/jpg", "image/jpeg", "image/png"];

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);

      if (ref.current.value !== "") {
        setError(null);
        if (file && type.includes(file.type)) {
          setError(null);
          setFile(file);
          ref.current.value = "";
        }
      }
      if (ref.current.value === "") {
        setError("Please add tag");
      }
      // else {
      //   setFile(null);
      //   setError("Please add tag");
      // }

      return file;
    });
  }, []);

  const handleTagChange = (e) => {
    e.preventDefault();
    setTag(e.target.value);
    if (tag !== "") {
      setError(null);
    }
  };
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
      setTag("");
    } else {
      setFile(null);
      setError("Please select an image file type: jpg or png");
    }
  };

  return (
    <>
      <form className='form-container' action='/'>
        <input
          ref={ref}
          onChange={handleTagChange}
          placeholder='enter a tag for your image'
        />
        <DropBox onDrop={onDrop} />
        {/* <label className='text-center'>
          <input type='file' onChange={changeHandler} hidden />
          <span>+</span>
        </label> */}
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div>{file.name}</div>}
          {tag && <div>{tag}</div>}
          {file && (
            <ProgressBar
              tag={tag}
              setTag={setTag}
              file={file}
              setFile={setFile}
            />
          )}
        </div>
      </form>
      <style jsx>
        {`
          :root {
            --primary: #efb6b2;
            --secondary: #4e4e4e;
            --error: #ff4a4a;
          }
          form {
            text-align: center;
            // padding: 0 10rem;
            margin: 2rem 6rem !important;
          }
          label input {
            height: 0;
            width: 0;
            opacity: 0;
          }
          label {
            display: block;
            width: 30px;
            height: 30px;
            border: 1px solid var(--primary);
            border-radius: 50%;
            margin: 10px auto;
            line-height: 30px;
            color: var(--primary);
            font-weight: bold;
            font-size: 24px;
          }
          label:hover {
            background: var(--primary);
            color: white;
          }

          .text-center {
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default UploadForm;
