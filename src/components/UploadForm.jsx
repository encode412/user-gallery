"use client";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const type = ["image/jpg", "image/jpeg", "image/png"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file type: jpg or png");
    }
  };
  console.log(file);
  return (
    <form action='/'>
      <label className="text-center">
        <input type='file' onChange={changeHandler} hidden />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
