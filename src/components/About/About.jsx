import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

function About() {
  return (
    <div>
      <section>
        <h2>About</h2>
        <div>
          <img src={getImageUrl("about/aboutImage.png")} alt="Me on the Mac" />
          <ul>
            <li>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
              <div>
               <h3>Frontend Developer</h3>
               <p>
                I´m a frontend developer with expirence in building responsive an optimized sites
               </p>
              </div>
            </li>
            <li>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
              <div>
               <h3>Backend Developer</h3>
               <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li>
              <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
              <div>
               <h3>UI Designer</h3>
               <p>
               I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          </ul>
          </div>
      </section>
    </div>
  )
}

export default About
