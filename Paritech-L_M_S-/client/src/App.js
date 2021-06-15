// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Components/Footer';
// import Aboutus from './Components/Aboutus';
// import {Link} from 'react-router';
import React, { useEffect, useState } from "react";
// import Axios from 'axios';
// import IndexComponent from './Router/IndexComponent'
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import SignIn from './Components/SignIn';
import Axios from 'axios';
// import Button from '@material-ui/core/Button';
import {Redirect,useHistory} from 'react-router-dom';
import SignIn from './Components/SignIn';
import IndexComponent from './Router/IndexComponent';

function App() {
  return (
    <div className="App">
     <IndexComponent/> 
    </div>
  );
}

export default App;
