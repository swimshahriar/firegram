import React, { useContext } from 'react';

import { AuthContext } from '../context/authContext';

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const { userName, userImage } = authContext.user;

  return (
    <div className="user">
      <img src={userImage} alt={userName} />
      <h3>{userName}</h3>
    </div>
  );
};

export default UserProfile;
