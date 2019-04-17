import React from 'react';
import {NavLink} from 'react-router-dom';
import Home from '../../pages/home.jsx';

const LandingPageNavigation = () => {
   
    return (
        <body>

        <div className="wrapper">
           <header>
              <nav>
                 <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                 </div>
                 <div className="logo">
                    ReviewMe
                 </div>
                 <div className="menu">
                    <ul>
                        <li><NavLink exact ={true} activeClassName='active' to ='/'>Home</NavLink></li>
                        <li><NavLink exact ={true} activeClassName='active' to="/login">Login</NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/Register'>Register</NavLink></li>
                        {/* <li><input type="button" onClick={Home.goToBoost}>CLICK ME</input>/></li> */}
                        {/* <li><NavLink exact ={true} activeClasName='active' to ='/register'>Register</NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/'></NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/'></NavLink></li> */}
                        {/* <li><NavLink exact ={true} activeClasName='active' to ='/'></NavLink></li> */}
                       {/* <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Contact</a></li> */}

                    </ul>
                 </div>
              </nav>
           </header>
        </div>
     </body>
    );
    
};

export default LandingPageNavigation;
