import React, { useState, useContext } from 'react';

import Title from './Components/Title';
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid';
import Modal from './Components/Modal';
import Auth from './Components/Auth';
import { AuthContext } from './context/authContext';
import UserProfile from './Components/UserProfile';

function App() {
  const [selectedImage, setSelectedImage] = useState({});
  const authContext = useContext(AuthContext);

  let content = (
    <React.Fragment>
      <Title title={'Login to upload & view your Gallery.'} />
      <Auth />
    </React.Fragment>
  );

  if (authContext.isAuth) {
    content = (
      <React.Fragment>
        <Title title="Your Pictures" />
        <UserProfile />
        <UploadForm />
        <ImageGrid setSelectedImage={setSelectedImage} />
        {selectedImage.url && (
          <Modal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </React.Fragment>
    );
  }
  return <div className="App">{content}</div>;
}

export default App;
