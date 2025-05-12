import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm My Duyen</h1>
        <p className={`${styles.description} ${styles.typingEffect}`}>
  WEB DEVELOPER
</p>

        <div className={styles.buttonGroup}>
  <a href="mailto:mduyen.innovate@gmail.com" className={styles.contactBtn}>
    Contact Me
  </a>
  <a href="/duyen_CV_intern.pdf" className={styles.downloadBtn} download>
    Download CV
  </a>
</div>


      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
