import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import '../../css/index.css';
//import Header from '../../components/layout/header';



class Home extends Component {

//    confirmPassword(){
//     // var x = document.forms["registerForm"]["password"].value;
//     // var y = document.forms["registerForm"]["confirmPassword"].value;
    
//     var x = document.getElementById('password').value;
//     var y = document.getElementById('confirmPassword').value; 
//      if (x != y) { 
//         alert("Ensure Passwords Match");
    
//         return false; 
        
//      }
//      else{
//          return true;

//      }
       
// } 
 confirmPassword(){
  // var x = document.forms["registerForm"]["password"].value;
  // var y = document.forms["registerForm"]["confirmPassword"].value;
  var x = document.getElementById('password').value;
  var y = document.getElementById('confirmPassword').value; 
   if (x != y) { 
      alert("Ensure Passwords Match");
  
      return false; 
      
   }
   else{
       return true;

   }
     
}
findNull(){
  var str,
  element = document.getElementById('password');
  if (element != null) {
    str = element.value;
  }
  else {
    str = null;
  }
}
goToBoost(){
  document.getElementById('boost_your_grades').scrollIntoView();
}
goToLogin(){
  document.getElementById('login_register').scrollIntoView();
}
goToAbout(){
  document.getElementById('about_us_vision_statement').scrollIntoView();
}
  render() {
    return (

   /* Changed main, to body... Messed up main cover IMG */ 
  <body>
      <div class = "">
        <div class="login_register" id="login_register">
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
                        <a id="forgotPassword" href="">Forgot Password?</a>
                      </form>
                    </div>
              
                    <div class="clearfix"></div>
                    </div>
                  <div id="sectionB" class="tab-pane fade">
                  <div class="innter-form">
                        <form class="sa-innate-form" method="post" name="registerForm"   action="/users" onSubmit= {this.findNull()}>
                          <div>
                            <label>First Name</label>
                            <input type="text" name="firstName" required></input>
                          </div>

                          <div>
                            <label>Last Name</label>
                            <input type="text" name="lastName" required></input>
                          </div>
                         
                          <div>
                            <label for="reviewee">User Role</label>
                            <div class="userRole" required>
                              <input id="reviewee" type="radio" name="role" value="Reviewee" checked="checked" id="reviewee" />
                              <label for="reviewee">Reviewee</label>

                              <input id="reviewer"type="radio" name="role" value="Reviewer" id="reviewer" />
                              <label for="reviewer">Reviewer</label>
                            </div>
                          </div>

                          <div>
                            <label>Email Address</label>
                            <input type="text" name="email" required></input>
                          </div>
                        
                          <div>
                            <label>Password</label>
                            <input type="password" name="password" id="password" required></input>
                          </div>
                        
                          <div>
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" required></input>
                          </div>
                         
                          <div>
                            {/* <button id="joinNow" value="Join Now" type="submit">Join now</button> */}
                            <input id="joinNow" type="submit" value="Join now" />
                            <p>By clicking Join now, you agree to ReviewMe's User Agreement, Privacy Policy, and Cookie Policy.</p>
                          </div>
                        </form>
                        {/* <a href="#boost_your_grades">boost your grades</a>
                        <input type="button" onClick={this.goToBoost}/> */}
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
        
          <div class="boost_your_grades" id="boost_your_grades">
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
        
        
      
        
          <div class="about_us_vision_statement" id="about_us_vision_statement">
           
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