import React, { useContext } from 'react';

import { AuthContext } from '../context/authContext';

function Title(props) {
  const authContext = useContext(AuthContext);
  return (
    <div className="title">
      <h1>Firegram</h1>
      {authContext.isAuth && (
        <button onClick={() => authContext.logOut()}>Log Out</button>
      )}
      <h2>{props.title}</h2>
      <p>
        Your friendly Firegram!
        <span role="img" aria-label="fire">
          🔥
        </span>
      </p>
    </div>
  );
}

export default Title;
