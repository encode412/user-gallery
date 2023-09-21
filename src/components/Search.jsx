/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projectFirestore } from "../../config/firebase";
import { motion } from "framer-motion";
import { Puff } from "react-loading-icons";
import { collection, query, where, getDocs } from "firebase/firestore";
import Header from "./Header";

const Search = ({ setSelectedImage }) => {
  const [ready, setReady] = useState(true);
  const [data, setData] = useState(null);

  //const { docs } = useSearchData("images", searchText);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let quer = useQuery();
  let search = quer.get("tag");

  useEffect(() => {
    searchData();
    if (data !== null ) {
      setReady(false);
    }
  }, [search]);

  const searchData = async () => {
    let documents = [];
    const q = query(
      collection(projectFirestore, "images"),
      where("tag", "==", search)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      documents.push({ ...doc?.data(), id: doc.id });
    });
    console.log(documents);
    setData(documents);
    return documents;
  };

  return (
    <>
      <Header />
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
          {data &&
            data
              ?.filter((doc) => doc.url !== null)
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

      {
        <style jsx>
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
        </style>
      }
    </>
  );
};

export default Search;
