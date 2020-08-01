import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { storageService, firestoreService } from '../firebase/config';
import { AuthContext } from '../context/authContext';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const authContext = useContext(AuthContext);
  const { id, url, name } = selectedImage;

  // backdrop click to close modal
  const backdropClickHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImage({});
    }
  };

  // delete handler
  const deleteHandler = () => {
    const storageRef = storageService.ref(name + '_' + authContext.user.userId);

    // deleting from firestore
    firestoreService
      .collection('images')
      .doc(id)
      .delete()
      .then(() => {})
      .catch((error) => {});

    // deleting from storage
    storageRef
      .delete()
      .then(() => {})
      .catch((error) => {});

    setSelectedImage({});
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={backdropClickHandler}
    >
      <motion.img
        src={url}
        alt={name}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {name}
      </motion.p>
      <button onClick={deleteHandler}>Delete</button>
    </motion.div>
  );
};

export default Modal;
