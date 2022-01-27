import React, { useState } from 'react';
import "./../styles/auth.css"
import { login } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


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
          <a>Mot de passe oublié</a>
          <Link style={{ textDecoration: 'none' }} to='/register'><a>Créer un compte</a></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;