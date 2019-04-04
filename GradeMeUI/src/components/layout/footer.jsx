import React from 'react';

import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
   
    
    <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Quick Links</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/Login'><i class="fa fa-angle-double-right"></i> Login</NavLink></li>
                        <li><NavLink exact ={true} to ='/Register'><i class="fa fa-angle-double-right"></i>Register</NavLink></li>
                        <li><NavLink exact ={true} to ='/About_us'><i class="fa fa-angle-double-right"></i>About Us</NavLink></li>
                        {/* <li><NavLink exact ={true} to ='/contact'><i class="fa fa-angle-double-right"></i>Contact</NavLink></li> */}
                    </ul>
				</div>
				<div class="col-xs-12 col-sm-8 col-md-8">
					<h5> Something relevant here</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					   qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
					   amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat.

					</p>
				</div>
	
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
						
						<li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>

					</ul>
				</div>
				<hr></hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					
					<p class="h6">ReviewMe is COSC412 WebApp that was constructed by Towson University Students Henry Osei, Norman Dyson, Paul Rehr, Kyle Roberts, and David Hanlon</p>
				</div>
				<hr></hr>
			</div>	
		</div>
	</section>
    
        
    );
};

export default Footer;