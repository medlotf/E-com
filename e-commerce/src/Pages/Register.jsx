import React, { useState } from 'react';
import "./../styles/auth.css"
import { register } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Register(props) {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, settEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
    history.push("/");
  };

  return (
    <div className='register-container'>
      <div className='inner-container'>
        <h1>Créer un compte</h1>
        <form>
          <input placeholder="Nom" onChange={(e) => setLastname(e.target.value)} />
          <input placeholder="Prénom" onChange={(e) => setFirstname(e.target.value)} />
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Email" onChange={(e) => settEmail(e.target.value)} />
          <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <input placeholder="Confirmation Password" type="password" onChange={(e) => setPasswordConf(e.target.value)} />

          <span className='form-span'>
            En créant un compte, je consens au traitement de mes données personnelles
            données conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>
          </span>
          <button onClick={handleClick} >Créer</button>
        </form>
      </div>
    </div>
  );
}

export default Register;