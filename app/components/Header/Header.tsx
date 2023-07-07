import React from 'react';
import Image from 'next/image'
import Face from '@/assets/image/face.png'
import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.header__wrapper}>
        <Link href='/' className={styles.header__logo}>
          <Image 
            src={Face} 
            alt='Me'
            className={styles["header__logo-image"]}
          />
          <p className={styles["header__logo-text"]}>
            WhoStoleMySleep
          </p>
        </Link>

        <nav className={styles.header__navigation}>
          <ul className={styles["header__navigation-list"]}>
            <li className={styles["header__navigation-element"]}>
              <Link href='' className={styles["header__contact-link"]}>Contact</Link>
            </li>
            <li className={styles["header__navigation-element"]}>
              <Link href='' className={styles.header__lightmode}></Link>
            </li>
            <li className={styles["header__navigation-element"]}>
              <span className="header__search">
                <Link href='' className={styles.header__search}></Link>
              </span>
            </li>
          </ul>
        </nav>
      </span>
    </header>
  );
}

export default Header;
