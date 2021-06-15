import React from 'react';
import '../App.css';
import Logo from '../Images/logo1.jpg';
// import Button from '@material-ui/core/Button';
import { DatePicker } from "@material-ui/pickers";
import  { useEffect, useState } from "react";
import  Sidebar   from './Sidebar';
import  Mainbody   from './Mainbody';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import Axios from 'axios';
import {UserConsumer} from './UserContext';
import Todo from './Todo';
import {Link} from 'react-router-dom';


function Home(){
    const [userdemo,setDemoReg] = useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date());


  const handleDateChange=(date)=>{
    setSelectedDate(date);
   alert(selectedDate);
   console.log(selectedDate);
    Axios.post("http://localhost:3001/demo",{
      selectedDate
    }).then(res=>{
      console.log(res);

    })

    .catch(err=>{

    })


  }
    
    return(
        <React.Fragment>


          
        <div className="header">
                <img  src={Logo} alt="image" />
                <div className="header-right">
                <a className="active" href="#home">Home</a>
                <Link  to="/todo">Todo List</Link>
                <a href="#about">About</a>
            </div>
        </div>
         
        {/* <div>
        <h3 className="for-center">Apply for Leave</h3>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </div>


    <div id="fromDate"></div>
    <div id="toDate"></div> */}


    
    </React.Fragment>
    )
}

export default Home;


