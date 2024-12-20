import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"


const Contact = () => {
  return (
  <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.WebP")} alt="Email Icon" />
            <a href="mailto:joshua-marcel.kaiser@web.de">joshua-marcel.kaiser@web.de</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.WebP")} alt="GitHub Icon" />
            <a href="https://github.com/JoshuaKaiser490" target='_blank'>github.com/JoshuaKaiser490</a>
        </li>
    </ul>
  </footer>
  );
}
export default Contact
