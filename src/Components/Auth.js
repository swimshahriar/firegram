import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthContext } from '../context/authContext';

const Auth = () => {
  const authContext = useContext(AuthContext);

  // calling login function from Auth Context
  const loginHandler = () => {
    // Using a popup.
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        const userName = user.displayName;
        const userImage = user.photoURL;
        const userId = user.uid;

        authContext.login(token, userId, userName, userImage);
      });
  };

  return (
    <div className="auth">
      <button onClick={loginHandler}>Login with Google</button>
      {/* <img src="https://i.ibb.co/1f3hRT0/firegram.png" alt="firegram" /> */}
    </div>
  );
};

export default Auth;
