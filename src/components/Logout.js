import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '706636386868-9eakka95v1798npejdlefgktknsg0gg2.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
      )}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
