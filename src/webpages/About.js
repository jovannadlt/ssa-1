// About.js

import React from 'react';
import "./style.css";
import { Image } from 'react-native';
const About = () => {
  return (
    <div>
      <main className="main">
        <section className="big-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            adipisicing elit. Reprehenderit, perferendis? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. <br />
            Laudantium voluptatem quisquam, soluta nulla debitis deleniti.
            Doloremque itaque repellendus tempora labore? <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            hic?
          </p>
        </section>

        <section style={{alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../images/prototype.jpg')} style={{ width: 450, height: 450, resizeMode: 'cover', marginTop: '5%', borderRadius: '15px', alignContent:'center', justifyContent:'center'}} />
        </section>
      </main>

      <section className="main-two">
  <Image source={require('../images/sm2-removebg-preview.png')} style={{ width: 200, height: 100, marginRight: 50, resizeMode: 'contain'}} />
</section>

    </div>
  );
};

export default About;
