import Face from '../../assets/image/face.webp'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import changeTheme from '../../lib/changeTheme';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.header__wrapper}>
        <Link to='/' className={styles.header__logo}>
          <img 
            src={Face} 
            alt='Me'
            className={styles["header__logo-image"]}
            loading='lazy'
          />
          <p className={styles["header__logo-text"]}>
            WhoStoleMySleep
          </p>
        </Link>

        <nav className={styles.header__navigation}>
          <ul className={styles["header__navigation-list"]}>
            <li className={styles["header__navigation-element"]}>
              <Link to='./contact' className={styles["header__contact-link"]}>Contact</Link>
            </li>
            <li className={styles["header__navigation-element"]}>
              <Link to='/' className={styles.header__lightmode} onClick={event => changeTheme(event, 'body')}></Link>
            </li>
          </ul>
        </nav>
      </span>
    </header>
  );
}

export default Header;
