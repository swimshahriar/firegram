import { useEffect, useState, useContext } from 'react';

import { firestoreService } from '../firebase/config';
import { AuthContext } from '../context/authContext';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const authContext = useContext(AuthContext);
  const userId = authContext.user.userId;

  // Getting data from firestore
  useEffect(() => {
    const unsub = firestoreService
      .collection(collection)
      .where('userId', '==', `${userId}`)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection, userId]);

  return { docs };
};

export default useFirestore;
