import React, { useState } from 'react';
import "./../styles/auth.css"
import { login } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login-container'>
      <div className='inner-container'>
        <h1>s'identifier</h1>
        <form>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleClick}>Se connecter</button>
          {error && <span className='erreur'>Un erreur est survenue...</span>}
          <a>Mot de passe oublié</a>
          <a>Créer un compte</a>
        </form>
      </div>
    </div>
  );
}

export default Login;