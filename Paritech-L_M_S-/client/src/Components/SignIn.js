import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import  { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import {BrowserRouter, Link} from 'react-router-dom'
import { createContext } from 'react'; 



const UserContext =  React.createContext();

export const UserProvider = UserContext.Provider;


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));






export default function SignIn() {
  const classes = useStyles();
  // const [usernameReg, setUsernameReg]=useState('');
  // const [emailReg, setEmailReg]=useState('');
  // const [passwordReg, setPasswordReg]=useState('');
  // const [numberReg, setNumberReg]=useState('');

  // const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  // const [number, setNumber]=useState('');

const [ loginStatus,setLoginStatus ] = useState(""); 

let loggedIn = false;
let history = useHistory();

const LoginFunction=()=>{
 Axios.post('http://localhost:3001/login',{
  
    email:email,
    password:password,
 }).then((response)=>{
    var userName = email;
    alert(userName);

 if(response.data.message){
   setLoginStatus(response.data.message)
 }else{
//    setLoginStatus(response.data[0].username);
   loggedIn = true;
     if(loggedIn){
      history.push('/home');
      console.log(response.data)
    } 
 }

})
}
function ValiadateFunction(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(email!="" && password!="" ){
    // alert("heklo");
     LoginFunction();
  }else{
    document.getElementById("errortxt").innerHTML="error"
  }
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <TextField variant="outlined"
            margin="normal"  required  fullWidth  id="email"  label="Email Address"  name="email" autoComplete="email"
            onChange={(e) =>{  setEmail(e.target.value);  }}  required/>
         
          <TextField  variant="outlined"  margin="normal" required  fullWidth  name="password"  label="Password"  type="password"
            id="password" onChange={(e) =>{  setPassword(e.target.value); }}
            autoComplete="current-password" />
         
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"/>
              <h2>{loginStatus}</h2>
              <h2 id="errortxt"></h2>

          <Button fullWidth  variant="contained"  color="primary"
            // className={classes.submit}
            onClick={ValiadateFunction} > Sign In </Button>
          <Grid container><Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">{"Don't have an account? Sign Up"}  </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}