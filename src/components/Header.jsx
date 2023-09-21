import { useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';

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
    navigate(`/search?tag=${searchText}`)
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1 className='logo'>EncodeDev</h1>
      <div className='content'>
        <h2 className='title'>Your Pictures</h2>
        <h3 className='text'>freeze the moment...</h3>
        <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={searchText} placeholder='Search image by tag' />
      </form>
      </div>
      <style jsx>
        {`
          .logo {
            margin: 0;
          }
          .content {
            text-align: center;
          }
          .title {
          }
        `}
      </style>
    </div>
  );
};

export default Header;
