import Face from '../../assets/image/face.webp'
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import changeTheme from '../../lib/changeTheme';
import { useTranslation } from 'react-i18next';
import changeLanguage from '../../lib/changeLanguage';
import useScrollToTop from '../../lib/hooks/useScrollToTop';

function Header() {
  const { t, i18n } = useTranslation()

  useScrollToTop()
  
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
              <Link to='./contact' className={styles["header__contact-link"]}>{t("Contact")}</Link>
            </li>
            <li className={styles["header__navigation-element"]}>
              <Link to='/' className={styles.header__lightmode} onClick={event => changeTheme(event, 'body')} title={t("Change color theme")}></Link>
            </li>
            <li className={styles["header__navigation-element"]}>
              <Link to='/' className={styles["header__language-link"]} onClick={event => changeLanguage(event, i18n)} title='На Русский'></Link>
            </li>
          </ul>
        </nav>
      </span>
    </header>
  );
}

export default Header;
