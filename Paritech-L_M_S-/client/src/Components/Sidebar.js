import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


function Sidebar() {
    return (
            <div class="sidenav">
                <Link to="/todo">todo list </Link>
                <a href="#services">leave management</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
    )
}

export default Sidebar
