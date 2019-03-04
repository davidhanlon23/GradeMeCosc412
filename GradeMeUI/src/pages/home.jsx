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

    
  <main>
      <section>
        <div class="Login_register">Login/Register</div>
      </section>
      <section>
        <div class="boost_your_grades">Boost your grades</div>
      </section>
      <section>
        <div class="about_us_vision_statement">About Us/ Vision Statement</div>
      </section>
      <div id = "map_border" ></div>
      <section>
        <iframe frameBorder="0" title="Location" style={{ width: "100%", height: "650"}} 
        src={_url}>
        </iframe> 
      </section>
      <div id = "map_border" ></div>
  </main>



// </div>


//       </div>

    );
  }
}

export default Home;