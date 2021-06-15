import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aboutus from '../Components/Aboutus';
import Contactus from '../Components/Contactus';
import SignIn from '../Components/SignIn';
// import {Link} from 'react-router';
import Register from '../Components/Register';
import Todo from '../Components/Todo';
import Home from '../Components/Home';
import App from '../App';
import { createContext } from 'react'; 
import {UserProvider} from '../Components/UserContext';

const UserContext =  React.createContext();

function IndexComponent(){
    return(
      <div>
          
          <Router>
                         <Switch>
                {/* <UserProvider value="viswas">  */}
                <Route path='/' exact component={SignIn} />
                <Route path='/contactus' exact component={Contactus} />
                <Route path='/aboutus' exact component={Aboutus} />
                <Route path='/register' exact component={Register} />
                <Route path='/home' exact component={Home} />
                <Route path='/signIn' exact component={SignIn} />
                <Route path='/todo' exact component={Todo} />
                {/* </UserProvider> */}
            </Switch>
            </Router>
 
     </div>
        
    )
}
export default IndexComponent;