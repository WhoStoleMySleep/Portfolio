import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Face from '@/assets/image/face.webp'
import bgMain from '@/assets/image/bgMain.webp'
import styles from './Main.module.scss';

function Header() {
  return (
    <main className={styles.main}>
      <div className="main__head-container">
        <Image src={bgMain} alt={''} className={styles["main__background"]} loading='lazy' />
        <Image src={Face} alt="" className={styles.main__face} loading='lazy' />
      </div>
      <div className={styles.main__text}>
        <h1 className={styles.main__title}>
          WhoStoleMySleep
        </h1>
        <p className={styles["main__about-me"]}>
          Hi, my name is Naumenko Konstantin and I am an experienced Full Stack developer with 3 years of experience in website development. My core skills include React, TypeScript and JavaScript. I try to constantly self-develop myself to keep up to date with the latest technologies and trends in web development. My main area of work is creating and developing full-featured websites.
        </p>
        <div className={styles["main__current-role"]}>
          I strive to constantly improve my skills and delve into different areas of web development. My real motivation is constant self-development and achieving the best results in my profession. I am ready to contribute to your project and apply my experience and knowledge to create a quality and user friendly website. If you have any questions or if you are interested in my collaboration, feel free to contact me. I will be happy to discuss your needs and offer the best solution for you.
        </div>
        <ul className={styles.main__links}>
          <li className={styles["main__bottom-link"]}>
            <span className={styles.main__icons}></span>
            <Link href="/resume" className={styles["main__resume-link"]}>WhoStoleMySleep's Resume</Link>
          </li>
          <li className={styles["main__bottom-link"]}>
            <span className={styles.main__icons}></span>
            <Link href="/contact" className={styles["main__contact-link"]}>Contact</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Header;
