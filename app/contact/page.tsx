import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import bgContact from '@/assets/image/bgContact.webp'
import styles from './page.module.scss';

function Contact() {
  return (
    <main className={styles["contact"]}>
      <div className="contact__head-container">
        <Image 
          src={bgContact} 
          alt={''} 
          className={styles["contact__background"]} 
          loading='lazy' 
        />
        <span className={styles["contact__icons"]}></span>
      </div>
      <div className={styles["contact__text-wrapper"]}>
        <h1 className={styles["contact__title"]}>
          Contact
        </h1>
        <p className={styles["contact__text"]}>
          In case you’d like to contact me for any opportunities, advice, or just a chat, please feel free to contact me via <Link href={'https://github.com/WhoStoleMySleep'} className={styles["contact__text-link"]} target='_blank'>Github</Link>.
        </p>
        <br />
        <br />
        <br />
        <ul className={styles["contact__links"]}>
          <li className={styles["contact__links-element"]}>
            <Link href={'https://github.com/WhoStoleMySleep'} target='_blank'>Github</Link>
          </li> 
          <li className={styles["contact__links-element"]}>
            <Link href={'https://t.me/WhoStoleMySleepFromMe'} target='_blank'>Telegram</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contact;
