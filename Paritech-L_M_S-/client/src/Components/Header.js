import React from 'react'
import Button from 'react-bootstrap/Button';

function Header(props){
    return (
            <header>
               <div>
                    <ul className="container">
                     <Link to="/aboutus">About Us</Link>
                     <Link to="/contactus">Contact Us</Link>
                    </ul>
                    {/* <Button variant="primary">Primary</Button>{' '} */}
                </div>
                </header>
    )
}
export default Header;