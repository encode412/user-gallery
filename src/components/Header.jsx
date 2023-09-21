import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?tag=${searchText}`);
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1 className='logo'>EncodeDev</h1>
      <div className='content'>
        <span className='title'>Your Pictures</span><br />
        <span className='text'>freeze the moment...</span>
        <form onSubmit={handleSubmit}>
          <input
            className='search-input'
            onChange={handleChange}
            value={searchText}
            placeholder='Search image by tag'
          />
        </form>
      </div>
      <style jsx>
        {`
          .logo {
            margin: 0;
            padding: 1rem;
            color: #0099cc;
          }
          .content {
            text-align: center;
          }
          .title {
            font-size: 3rem;
            letter-spacing: 1px;
            margin: 0;
          }
          .text {
            margin: 0;
            
            font-style: italic;
            font-size: 0.9rem;
          }
          .search-input {
            padding: 0.8rem;
            border: none;
            width: 50%;
            font-size: .8rem;
            border-radius: 5px;
            
          }
          input:focus {
            outline: 0;
            border: 1px solid #0099cc;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
