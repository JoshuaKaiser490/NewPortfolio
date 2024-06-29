import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
        
        <h1 className={styles.title}>
          <Typewriter
            words={["Hi, I'm Joshua.", "Web developer from Germany.", "Welcome to my portfolio!"]}
            loop={1}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className={styles.description}>I'm Joshua, a 26-year-old web developer from Germany. With solid experience in web development, I work with HTML, CSS, JavaScript, and React for the frontend, and Node.js for the backend. I'm excited to keep exploring and growing in this field 🖥️.</p>
        <a href="mailto:joshua-marcel.kaiser@web.de" className={styles.contactBtn}>Contact me</a>
    
    </div>
    <img  src={getImageUrl("hero/heroImage.WebP")} alt="Hero Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};

export default Hero;
