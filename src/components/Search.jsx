/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSearchData } from "../../hooks/useSearchData";
import { motion } from "framer-motion";
import { Puff } from "react-loading-icons";

const Search = ({ setSelectedImage }) => {
  const [ready, setReady] = useState(true);
  const [searchText, setSearchText] = useState("");
  const { docs } = useSearchData("images", searchText);

  useEffect(() => {
    if (docs) {
      setReady(false);
    }
  }, [docs]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <>
      <input onChange={handleChange} placeholder='Search image by tag' />
      {ready ? (
        <div className='loader'>
          <Puff
            width={900}
            stroke='#98ff98'
            strokeOpacity={0.125}
            speed={0.75}
          />
        </div>
      ) : (
        <div className='image-container-grid'>
          {docs &&
            docs
              .filter((doc) => doc.url !== null)
              .map((doc) => (
                <motion.div
                  layout
                  whileHover={{ opacity: 1 }}
                  className='img-wrap'
                  key={doc.id}
                  onClick={() => setSelectedImage(doc.url)}
                >
                  <motion.img
                    src={doc.url}
                    alt={doc.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                </motion.div>
              ))}
        </div>
      )}

      {/* <style jsx>
        {`
          .image-container-grid {
            margin: 20px auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 40px;
          }
          .img-wrap {
            overflow: hidden;
            height: 0;
            padding: 50% 0;
            position: relative;
            opacity: 0.8;
          }

          .img-wrap img {
            min-width: 100%;
            min-height: 100%;
            max-width: 150%;
            position: absolute;
            top: 0;
            left: 0;
          }

          .loader {
            text-align: center;
          }
        `}
      </style> */}
    </>
  );
};

export default Search;
