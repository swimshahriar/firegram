import { useState, useEffect, useContext } from 'react';
import {
  storageService,
  firestoreService,
  timeStamp,
} from '../firebase/config';
import { AuthContext } from '../context/authContext';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // file reference and db reference
    const storageRef = storageService.ref(file.name);
    const firestoreRef = firestoreService.collection('images');

    // Image upload state
    storageRef.put(file).on(
      'state_changed',
      (snapShot) => {
        let percentage =
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        const name = file.name;
        const userId = authContext.user.userId;
        firestoreRef.add({ name, userId, url, createdAt });
        setUrl(url);
      }
    );
  }, [file, authContext]);

  return { progress, error, url };
};

export default useStorage;
