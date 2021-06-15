import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";
import Axios from 'axios';
import {BrowserRouter, Link} from 'react-router-dom';
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
import {useHistory} from 'react-router-dom';

function Copyright() {
    return ( 
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
  

function Register() {

  const [usernameReg, setUsernameReg]=useState('');
  const [emailReg, setEmailReg]=useState('');
  const [passwordReg, setPasswordReg]=useState('');
  const [numberReg, setNumberReg]=useState('');

  // const [username, setUsername]=useState('');
  // const [email, setEmail]=useState('');
  // const [password, setPassword]=useState('');
  // const [number, setNumber]=useState('');

    const [ loginStatus,setLoginStatus ] = useState(""); 


    const register=()=>{
      Axios.post('http://localhost:3001/register',{ 
        username:usernameReg,
        email:emailReg,
        password:passwordReg,
        number:numberReg,
      }).then((response)=>{
        console.log("response");
      })
    }

  return (
<React.Fragment>
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className="">
  <Avatar className=""><LockOutlinedIcon /></Avatar>
  <Typography component="h1" variant="h5">Register</Typography>
  <form className="" noValidate>
    <TextField variant="outlined" margin="normal" required fullWidth id="email" label="User Name" name="email" autoComplete="email"
      onChange={(e) => { setUsernameReg(e.target.value);}} autoFocus/>
    <TextField
      variant="outlined" margin="normal" required fullWidth name="email" label="email" type="email" id="email"
      onChange={(e) =>{setEmailReg(e.target.value); }} autoComplete="current-email"/>
    
    <TextField
      variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password"
      onChange={(e) =>{setPasswordReg(e.target.value); }} autoComplete="current-password"/>
   <TextField
      variant="outlined" margin="normal" required fullWidth name="number" label="number" type="number" id="number"
      onChange={(e) =>{setNumberReg(e.target.value); }} autoComplete="current-number"/>


    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}  label="Remember me"/>
        <h2>{loginStatus}</h2>
    <Button fullWidth variant="contained"  color="primary"  onClick={register}>Register</Button>
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2"> Forgot password?</Link>
      </Grid>
      <Grid item>
        <Link to='/signIn' variant="body2">{"Login"}</Link>
      </Grid>
    </Grid>
  </form>
</div>
<Box mt={8}>
  <Copyright />
</Box>
</Container>
</React.Fragment> 

  );
}

export default Register;