// About.js

import React from 'react';
import "./style.css";
import { Image } from 'react-native';
const About = () => {
  return (
    <div>
      <main className="main">
        <section className="big-text">
          <h1>Sensory Sight Assist</h1>
          <p style={{fontSize:'20px'}}>
          Sensor Sight Assist, a revolutionary device designed to enhance the lives of individuals facing vision challenges. Our innovative solution is versatile, easily applicable to various environments, from hospital settings to private homes and nursing facilities. Sensor Sight Assist is tailored specifically for people with vision problems, providing a simple, low-cost tool to help them navigate and adapt to new surroundings with ease.

Unlike permanent solutions, our device serves as a temporary aid, supporting individuals to successfully adapt to their environment. This adaptability makes Sensor Sight Assist a dynamic and responsive tool, ensuring it evolves with the changing needs of its users.

At an affordable cost of around $10 per device, Sensor Sight Assist stands out as an economical choice for those seeking accessibility solutions. With an estimated total cost of $40 to $50 for the entire tool (including one device for each room), our product is not only effective but also budget-friendly. Our business model aims for sustainable growth, with revenue estimated at around $3 per device, making Sensor Sight Assist an accessible and impactful solution for individuals facing vision challenges in various settings. Join us in making a positive impact on the lives of those who need it most.
          </p>
        </section>

        <section style={{alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../images/prototype.jpg')} style={{ width: 450, height: 450, resizeMode: 'cover', marginTop: '10%', marginLeft:'15%', borderRadius: '15px', alignContent:'center', justifyContent:'center'}} />
        </section>
      </main>
<div style={{marginBottom:"100%"}}>
      <section className="main-two">
  <Image source={require('../images/sm2-removebg-preview.png')} style={{ width: 200, height: 100, resizeMode: 'contain'}} />
</section>
</div>
    </div>
  );
};

export default About;
