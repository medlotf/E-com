import React from 'react';
import "./../styles/auth.css"

function Login(props) {
  return (
    <div className='login-container'>
      <div className='inner-container'>
        <h1>s'identifier</h1>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>Se connecter</button>
          <a>Mot de passe oublié</a>
          <a>Créer un compte</a>
        </form>
      </div>
    </div>
  );
}

export default Login;