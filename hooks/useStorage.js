import { useState, useEffect } from "react";
import { projectStorage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

     uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setProgress(progress);
        },
        (err) => setError(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl(url);
            });
        }
    );   
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
