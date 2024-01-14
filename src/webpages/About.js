// About.js

import React from 'react';
import "./style.css";
import { Image , Text} from 'react-native';
const About = () => {
  return (
    <div>
      <main className="main">
        <section className="big-text">
          <h1>About Us</h1>
          <p style={{fontSize:'20px'}}>
          Five Santa Monica College students collaborated to participate in IDEA HACKS at UCLA, driven by this year's theme, "Celebrating Our Communities." Their collective focus aimed at accessibility, sustainability, and active community engagement. 
          Over the span of a 36-hour hackathon, these individuals pooled their expertise in electrical, hardware, software, and web development, demonstrating a collaborative effort to address challenges and contribute to the overarching theme of community celebration. 
          </p>
        </section>
        

        <section style={{alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../images/group-photo.jpg')} style={{ width: 450, height: 450, resizeMode: 'cover', marginTop: '10%', marginLeft:'15%', borderRadius: '15px', alignContent:'center', justifyContent:'center'}} />
        </section>

      </main>
      <div>
      <section className="big-text" style={{marginTop:'-43%', marginLeft:'11%', fontFamily: 'Lato', fontSize:'20px'}}>
          <h1>Members<Text>   (left to right)</Text></h1>
          <p style={{}}> 
          <p style={{fontSize:'20px', paddingBottom:'4px'}}>
            Jovanna De La Trinidad - Web Development </p>
            <p style={{fontSize:'20px', paddingBottom:'4px'}}>
            Semia - Hardware/Electrical
          </p>
            <p style={{fontSize:'20px', paddingBottom:'4px'}}>
            Sebastain Rocha - Software Development </p>
            <p style={{fontSize:'20px', paddingBottom:'4px'}}>
            Ahin Huq - Software Development </p>
            <p style={{fontSize:'20px', paddingBottom:'4px'}}>
            Dexter Mack - Web Development<br/><br/><br/>
            </p>
            </p>
          </section>
      </div>
<div style={{marginBottom:"100%"}}>
      <section className="main-two">
  <Image source={require('../images/sm2-removebg-preview.png')} style={{ width: 200, height: 100, resizeMode: 'contain'}} />
</section>
</div>
    </div>
  );
};

export default About;
