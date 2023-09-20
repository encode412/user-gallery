

/* eslint-disable react/no-unknown-property */
const Hero = () => {
  return (
    <div>
      <h1 className='logo'>EncodeDev</h1>
      <div className='content'>
        <h2 className='title'>Your Pictures</h2>
        <h3 className='text'>freeze the moment...</h3>
        
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

export default Hero;
