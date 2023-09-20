/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { motion } from 'framer-motion';
import useStorage from "../../hooks/useStorage";

const ProgressBar = ({ tag, file, setTag, setFile }) => {
  const { url, progress } = useStorage(file, tag);
  
  useEffect(() => {
    if(url) {
      setFile(null)
      setTag('')
    }
  }, [url, setFile])

  return (
    <motion.div className='progress-bar' 
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >      
      <style jsx>
        {`
         .progress-bar{
          height: 5px;
          background: #efb6b2;
          margin-top: 20px;
        }
        `}
      </style>
      </motion.div>
  );
};

export default ProgressBar;
