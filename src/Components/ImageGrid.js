import React, { useState } from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';
import Spinner from './Spinner';

const ImageGrid = ({ setSelectedImage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { docs } = useFirestore('images');

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Spinner />;
  }

  let content = <h1 className="img-grid-h1">No Image Found!</h1>;
  if (docs.length !== 0) {
    content = (
      <div className="img-grid">
        {docs.map((doc) => {
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
        })}
      </div>
    );
  }

  return content;
};

export default ImageGrid;
