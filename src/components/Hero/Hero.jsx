import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
        
        <h1 className={styles.title}>Hi, i´m Joshua</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cumque temporibus voluptatum cum odio sed vero veritatis eos! Libero, quibusdam. Sa?</p>
        <a href="mailto:joshua-marcel.kaiser@web.de" className={styles.contactBtn}>Contact me</a>
    
    </div>
    <img  src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};

export default Hero
