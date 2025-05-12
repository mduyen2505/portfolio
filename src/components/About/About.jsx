import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                I am a final-year student .Currently, I am looking for intership opportunities to futher enhance my skills, gain practical experience, and contribute to the success of your company. My objective is to gain hands-on experience and contribute effectively to your company's goals, with a long-term vision of becoming a valuable asset to the organization.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education : </h3>
              <p>
  Vietnam Aviation Academy <span className={styles.eduDate}>Sep 2022 - Present</span><br />
  Major in Information Technology<br />
  GPA: 3.2/4.0
</p>


            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications : </h3>
              <p>
               Coursera : What is Data Science - IBM 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
