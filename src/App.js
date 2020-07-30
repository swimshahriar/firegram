import React, { useState } from 'react';

import Title from './Components/Title';
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid';
import Modal from './Components/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState({});
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage.url && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
