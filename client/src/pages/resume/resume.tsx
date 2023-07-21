import clip from '../../assets/image/clip.svg';
import styles from './resume.module.scss'
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <main className={styles.resume}>
      <h1 className={styles["resume__title"]}>WhoStoleMySleep's Resume</h1>
      <Link 
        to='../../assets/Науменко Константин Николаевич - Full stak developer - cv.doc' 
        download={''} 
        target="_blank"
        className={styles['resume__file-link']}
      >
        <img src={clip} alt={''} className={styles["resume__icon"]} />
        File
      </Link>
      <article className={styles["resume__contacts"]}>
        <Link className={styles["resume__number"]} to={'tel:+79133070592'}>
          +7 (913) 307-05-92
        </Link>
        <Link className={styles["resume__email"]} to={'mailto:thekostia5@gmail.com'}>
          thekostia5@gmail.com
        </Link>
        <Link className={styles["resume__site"]} to={'https://whostolemysleep.com'} target="_blank">
          whostolemysleep.com
        </Link>
      </article>
      <article className={styles["resume__about-me"]}>
        <h4 className={styles["resume__article-title"]}>
          About Me
        </h4>
        <p className={styles["resume__about-me-text"]}>
          As a Backend Engineer at Yahoo on the Fantasy Sports team, I am highly experienced in the software engineering field, having implemented microservices, libraries, and distributed multi-tenant architectures. I'm also an open-source enthusiast, and I have created and worked on several projects that have been listed in GitHub's trending section
        </p>
        <p className={styles["resume__about-me-text"]}>
          My educational background is in Computer Science, with a Master's degree from UT Dallas and a Bachelor's from IIT Guwahati. I have a passion for programming, and I'm constantly looking for ways to keep my skills up to date and learn new technologies. My current goal is to develop my expertise in cloud computing and distributed systems, and I'm actively researching the latest trends in this field. Furthermore, I am a huge proponent of open-source technologies and constantly looking for ways to contribute to the community.
        </p>
      </article>
      <article className={styles["resume__experience"]}>
        <h4 className={styles["resume__article-title"]}>
          Experience
        </h4>
        <blockquote className={styles['resume__experience-element']}>
          <p className={styles["resume__current-position"]}>
            Member of Technical Staff
          </p>
          <span className={styles["resume__company-and-date"]}>
            <p className={styles["resume__company"]}>
              VMware
            </p>
            <time className={styles["resume__date"]} dateTime='June 2021 - Sept 2022'> 
              June 2021 - Sept 2022
            </time>
          </span>
          <ul className={styles["resume__job-duties"]}>
            <li className={styles["resume__job-duties-item"]}>
              <p className={styles["resume__job-title"]}>Automation Platform development: </p>
              <p className={styles["resume__job-description"]}>
                End-to-end implementation of multiple microservices using test-driven development. These services are a part of VMware’s remediation and diagnostic automation platform used by SREs of different products to automate their operations. 
              </p>
            </li>
            <li className={styles["resume__job-duties-item"]}>
              <p className={styles["resume__job-title"]}>Automation Platform development: </p>
              <p className={styles["resume__job-description"]}>
                End-to-end implementation of multiple microservices using test-driven development. These services are a part of VMware’s remediation and diagnostic automation platform used by SREs of different products to automate their operations. 
              </p>
            </li>
            <li className={styles["resume__job-duties-item"]}>
              <p className={styles["resume__job-title"]}>Automation Platform development: </p>
              <p className={styles["resume__job-description"]}>
                End-to-end implementation of multiple microservices using test-driven development. These services are a part of VMware’s remediation and diagnostic automation platform used by SREs of different products to automate their operations. 
              </p>
            </li>
          </ul>
        </blockquote>
      </article>
      <article className={styles["resume__education"]}>
        <h4 className={styles["resume__article-title"]}>Education</h4>
        <blockquote className={styles["resume__education-element"]}>
          <p className={styles["resume__faculty"]}>
            Master of Science in Computer Science
          </p>
          <span className={styles["resume__place-or-date"]}>
            <p className={styles["resume__place-of-study"]}>
              The University of Texas at Dallas
            </p>
            <time className={styles["resume__study-dates"]} dateTime='2019 - 2021'>
              2019 - 2021
            </time>
          </span>
        </blockquote>
        <blockquote className={styles["resume__education-element"]}>
          <p className={styles["resume__faculty"]}>
            Master of Science in Computer Science
          </p>
          <span className={styles["resume__place-or-date"]}>
            <p className={styles["resume__place-of-study"]}>
              The University of Texas at Dallas
            </p>
            <time className={styles["resume__study-dates"]} dateTime='2019 - 2021'>
              2019 - 2021
            </time>
          </span>
        </blockquote>
      </article>
      <article className={styles["resume__skills"]}>
        <h4 className={styles["resume__article-title"]}>Skills</h4>
        <ul className={styles["resume__skills-list"]}>
          <li className={styles["resume__working-languages"]}>
            <p className={styles["resume__skill-title"]}>Languages: </p>
            <span className={styles["resume__all-learned"]}>
              Java (5 years), Python (3 years), Bash
            </span>
          </li>
          <li className={styles["resume__frameworks"]}>
            <p className={styles["resume__skill-title"]}>Frameworks: </p>
            <span className={styles["resume__all-learned"]}>
              Spring Framework, JUnit, Mockito, Flask
            </span>
          </li>
          <li className={styles["resume__cloud-devops"]}>
            <p className={styles["resume__skill-title"]}>Cloud & DevOps: </p>
            <span className={styles["resume__all-learned"]}>
              AWS, Kubernetes, Docker, Microservices, nginx, helm
            </span>
          </li>
          <li className={styles["resume__tools"]}>
            <p className={styles["resume__skill-title"]}>Tools: </p>
            <span className={styles["resume__all-learned"]}>
              Git, Jenkins CI, MySQL, REST API, Jira, Gradle, Maven, Wavefront
            </span>
          </li>
        </ul>
      </article>
    </main>
  )
}

export default Resume;