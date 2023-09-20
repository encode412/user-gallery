/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { projectFirestore } from "../config/firebase";
import { onSnapshot, collection } from "firebase/firestore";

const useFirestore = (c) => {
  const [docs, setDocs] = useState([]);
  const dbRef = collection(projectFirestore, c);

  useEffect(() => {
    const unsub = () => {
      onSnapshot(dbRef, (docSnap) => {
        let documents = [];
        docSnap.docs.forEach((doc) => {
          documents.push({ ...doc?.data(), id: doc.id });
         
        });
        setDocs(documents);
      });
    };
    return () => unsub();
  }, [c]);
  
  return { docs };
};

export { useFirestore };
