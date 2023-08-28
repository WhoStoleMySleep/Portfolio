import { useTranslation } from 'react-i18next';
import bgContact from '../../assets/image/bgContact.webp'
import styles from './contact.module.scss';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../lib/hooks/useScrollToTop';

function Contact() {
  const { t } = useTranslation()
  
  return (
    <main className={styles["contact"]}>
      <div className="contact__head-container">
        <img 
          src={bgContact} 
          alt={''} 
          className={styles["contact__background"]} 
          loading='lazy' 
        />
        <span className={styles["contact__icons"]}></span>
      </div>
      <div className={styles["contact__text-wrapper"]}>
        <h1 className={styles["contact__title"]}>
          {t("Contact")}
        </h1>
        <p className={styles["contact__text"]}>
          {t("In case you’d like to contact me for any opportunities, advice, or just a chat, please feel free to contact me via")} <Link to={'https://t.me/WhoStoleMySleepFromMe'} className={styles["contact__text-link"]} target='_blank'>Telegram</Link>.
        </p>
        <br />
        <br />
        <br />
        <ul className={styles["contact__links"]}>
          <li className={styles["contact__links-element"]}>
            <Link to={'https://github.com/WhoStoleMySleep'} target='_blank'>Github</Link>
          </li> 
          <li className={styles["contact__links-element"]}>
            <Link to={'https://t.me/WhoStoleMySleepFromMe'} target='_blank'>Telegram</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contact;
