import React from 'react';
import "./../styles/auth.css"

function Register(props) {
  return (
    <div className='register-container'>
      <div className='inner-container'>
        <h1>Créer un compte</h1>
        <form>
          <input placeholder="Nom" />
          <input placeholder="Prénom" />
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirmation Password" />
          <span className='form-span'>
            En créant un compte, je consens au traitement de mes données personnelles
            données conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>
          </span>
          <button>Créer</button>
        </form>
      </div>
    </div>
  );
}

export default Register;