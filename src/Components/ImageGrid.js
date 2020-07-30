import React from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs ? (
        docs.map((doc) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImage(doc)}
            >
              <motion.img
                src={doc.url}
                alt={doc.name}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })
      ) : (
        <div>
          <h1>No Images!</h1>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
