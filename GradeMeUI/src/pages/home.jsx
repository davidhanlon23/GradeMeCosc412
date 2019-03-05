import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import '../../css/index.css';
//import Header from '../../components/layout/header';


const MY_API = 'AIzaSyCftvFVQlonprlXUmTKhLMTGba1eNiiidA'
let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=39.363312,-77.162910`

class Home extends Component {


  render() {
    return (

   /* Changed main, to body... Messed up main cover IMG */ 
  <body>
      <div class = "">
        <div class="login_register">
        <div class="col-md-4"><h1> Sign In or Join Our Growing Community!</h1></div>
          <div class ="login_background">
            <div class="container">
              {/* <div class="row">
                
              </div> */}
            </div>
            <br/>
            <br/>
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-md-offset-4">
                  <div class="form-body">
                    <ul class="nav nav-tabs final-login">
                      <li class="active"><a data-toggle="tab" href="#sectionA">Sign In</a></li>
                      <li><a data-toggle="tab" href="#sectionB">Join us!</a></li>
                    </ul>
                    <div class="tab-content">
                    <div id="sectionA" class="tab-pane fade in active">
                    <div class="innter-form">
                      <form class="sa-innate-form" method="post">
                        <label>Email Address</label>
                        <input type="text" name="username"></input>
                        <label>Password</label>
                        <input type="password" name="password"></input>
                        <button type="submit">Sign In</button>
                        <a href="">Forgot Password?</a>
                      </form>
                    </div>
              
                    <div class="clearfix"></div>
                    </div>
                  <div id="sectionB" class="tab-pane fade">
                  <div class="innter-form">
                        <form class="sa-innate-form" method="post">
                          <label>Name</label>
                          <input type="text" name="username"></input>
                          <label>Email Address</label>
                          <input type="text" name="username"></input>
                          <label>Password</label>
                          <input type="password" name="password"></input>
                          <button type="submit">Join now</button>
                          <p>By clicking Join now, you agree to ReviewMe's User Agreement, Privacy Policy, and Cookie Policy.</p>
                        </form>
                  </div>
              
                  </div>
                    </div>
                  </div>

            </div>
              </div>
            </div>
          </div>
        </div>
    
{/* --------------------------------------------------------------- */}
        
          <div class="boost_your_grades">
              <div class="col-md-4"></div>
              <div class="col-md-4 offset-md-4">
                <h1>Boost Your Grades</h1>
                <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
        
        
      
        
          <div class="about_us_vision_statement">
           
            <div class = "col-md-4">
              <h1>About Us / Vision Statement</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
        
        
      
      
      </div>
      
      
    
  </body>


    );
  }
}

export default Home;