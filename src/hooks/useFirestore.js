import { useEffect, useState } from 'react';

import { firestoreService } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  // Getting data from firestore
  useEffect(() => {
    console.log('called');
    const unsub = firestoreService
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
