import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const { url, name } = selectedImage;

  // backdrop click to close modal
  const backdropClickHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImage({});
    }
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
    </motion.div>
  );
};

export default Modal;
