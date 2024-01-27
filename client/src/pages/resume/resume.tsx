import clip from '../../assets/image/clip.svg';
import ExperienceBlockquote from '../../components/ExperienceBlockquote/ExperienceBlockquote';
import styles from './resume.module.scss'
import { Link } from 'react-router-dom';
import { EducationData, ExperienceData } from './resumedata';
import EducationBlockquote from '../../components/EducationBlockquote/EducationBlockquote';
import { useTranslation } from 'react-i18next';

function Resume() {  
  const { t } = useTranslation()
  
  return (
    <main className={styles.resume}>
      <h1 className={styles["resume__title"]}>{t("WhoStoleMySleep's Resume")}</h1>
      <Link 
        to={'/resume'}
        // download={''} 
        // target="_blank"
        className={styles['resume__file-link']}
      >
        <img src={clip} alt={''} className={styles["resume__icon"]} />
        {t("File")}
      </Link>
      <article className={styles["resume__contacts"]}>
        <Link className={styles["resume__number"]} to={'tel:+79133070592'}>
          +7 (913) 307-05-92
        </Link>
        <Link className={styles["resume__email"]} to={'mailto:thekostia5@gmail.com'}>
          thekostia5@gmail.com
        </Link>
        <Link className={styles["resume__site"]} to={'https://whostolemysleep.ru/'} target="_blank">
          whostolemysleep.ru
        </Link>
      </article>
      <article className={styles["resume__about-me"]}>
        <h4 className={styles["resume__article-title"]}>
          {t("About Me")}
        </h4>
        <p className={styles["resume__about-me-text"]}>
          {t("I am a fullstack developer with over 4 years of experience in this field. My professional experience includes building custom websites as well as managing a team of developers. I am used to working with different technologies and programming languages such as HTML (JSX/TSX), CSS (SCSS), JavaScript (Typescript), React, Angular, Node.js, Figma and others. My goal is to create quality and user-friendly websites for clients to meet their needs and requirements. I am always up for new challenges and strive to continuously improve my skills and knowledge in web development.")}
        </p>
        <p className={styles["resume__about-me-text"]}>
          {t("I am passionate about programming and am constantly looking for ways to keep my skills up to date and learn new technologies. Currently, my goal is to develop my knowledge of Fullstak development and I am actively researching the latest trends in the field. I am also a big supporter of open source technologies and am constantly looking for ways to contribute to the community.")}
        </p>
      </article>
      <article className={styles["resume__experience"]}>
        <h4 className={styles["resume__article-title"]}>
          {t("Experience")}
        </h4>
        <ul className="resume__blockquote-list">
          {ExperienceData.map((item, index) => (
            <li key={index} className='resume__blockquote-list-element'>
              <ExperienceBlockquote ExperienceData={item} />
            </li>
          ))}
        </ul>
      </article>
      <article className={styles["resume__education"]}>
        <h4 className={styles["resume__article-title"]}>{t("Education")}</h4>
        <ul className="resume__blockquote-list">
          {EducationData.map((item, index) => (
            <li key={index} className='resume__blockquote-list-element'>
              <EducationBlockquote EducationData={item} />
            </li>
          ))}
        </ul>
      </article>
      <article className={styles["resume__skills"]}>
        <h4 className={styles["resume__article-title"]}>{t("Skills")}</h4>
        <ul className={styles["resume__skills-list"]}>
          <li className={styles["resume__working-languages"]}>
            <p className={styles["resume__skill-title"]}>{t("Languages: ")}</p>
            <span className={styles["resume__all-learned"]}>
              JavaScript, Typescript, HTML (JSX/TSX), CSS (SCSS), PHP
            </span>
          </li>
          <li className={styles["resume__frameworks"]}>
            <p className={styles["resume__skill-title"]}>{t("Frameworks: ")}</p>
            <span className={styles["resume__all-learned"]}>
              React, Next.js, Angular, Node.js, Express, Laravel
            </span>
          </li>
          <li className={styles["resume__cms"]}>
            <p className={styles["resume__skill-title"]}>CMS: </p>
            <span className={styles["resume__all-learned"]}>
              Wordpress, UMICMS
            </span>
          </li>
          <li className={styles["resume__tools"]}>
            <p className={styles["resume__skill-title"]}>{t("Tools: ")}</p>
            <span className={styles["resume__all-learned"]}>
              Git, MySQL, REST API, Graphql, Jira, Webpack, Jest, Redux, Mobx, Figma
            </span>
          </li>
        </ul>
      </article>
    </main>
  )
}

export default Resume;