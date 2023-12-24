import TextField from '@mui/material/TextField';
import './LogIn.css'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import Swal from 'sweetalert2';
import { Validator } from "react";
import Footer from "../footer/Footer";
import Admin from "../Admin/Admin";
import Header from '../Header/Header';
import axios from "axios";
import GlobalStore from '../../stores/GlobalStore';


function LogIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const successLogin = () => {
    Swal.fire({
      position: "center",
      icon: 'success',
      showConfirmButton: false,
      title: "You've logged in successfully!",
      timer: 1500
    });
  };
  const faildLogin = () => {
    Swal.fire({
      position: "center",
      icon: 'error',
      showConfirmButton: false,
      title: "no access! Try again",
      timer: 1500
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8787/login";
    axios.post(url, { name: userName, password: password })
      .then((response) => {
        console.log(response.data);
        GlobalStore.setIsLogin(true);
        successLogin();
      })
      .catch((error) => {
        console.log(error);
        faildLogin();
      });
  };


  return (
    <>
      <>
        <form className="formDiv" id='formLogin' onSubmit={handleSubmit}>

          <div className="loginDiv">

            <h1>login</h1>
            <LoginIcon />
          </div>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            required
            className="inputs"
            onChange={(n) => setUserName(n.target.value)}
          />
          <TextField
            className="inputs"
            id="outlined-password-input"
            label="password"
            type="password"
            autoComplete="current-password"
            required
            variant="outlined"
            onChange={(p) => setPassword(p.target.value)}

          />
          <Button variant="contained" type='submit' >
            submit
          </Button>
        </form>
      </>


    </>
  )
}
export default LogIn











