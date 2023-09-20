/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
const Modal = ({ selectedImage, setSelectedImage }) => {

    const handleClick = () => {
    setSelectedImage(null);
    };

  return (
    <motion.div className='backdrop' onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImage} alt='image'
        initial={{ y: '-100vh'}}
        animate={{ y: 0}}
       />

      <style jsx>
        {`
            .backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
            }

            .backdrop img {
                display: block;
                max-width: 60%;
                max-height: 80%;
                margin: 60px auto;
                box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
                border: 3px solid #ffffff;
            }
        `}
      </style>
    </motion.div>
  );
};

export default Modal;
