import { useTranslation } from 'react-i18next';
import styles from './ExperienceBlockquote.module.scss';

function ExperienceBlockquote({ExperienceData}: {
  ExperienceData: {
    currentPosition: string, 
    company: string, 
    date: string,
    jobDuties: {jobTitle: string, jobDescription: string}[],
  }
}) {
  const { currentPosition, company, date, jobDuties } = ExperienceData
  const { t } = useTranslation()
    
  return (
    <blockquote className={styles['experience-blockquote']}>
      <p className={styles["experience-blockquote__current-position"]}>
        {t(currentPosition)}
      </p>
      <span className={styles["experience-blockquote__company-and-date"]}>
        <p className={styles["experience-blockquote__company"]}>
          {t(company)}
        </p>
        <time className={styles["experience-blockquote__date"]} dateTime={t(date)}> 
          {t(date)}
        </time>
      </span>
      <ul className={styles["experience-blockquote__job-duties"]}>
        {jobDuties.map((item, index) => (
          <li key={index} className={styles["experience-blockquote__job-duties-item"]}>
            <p className={styles["experience-blockquote__job-title"]}>{t(item.jobTitle)}</p>
            <p className={styles["experience-blockquote__job-description"]}>{t(item.jobDescription)}</p>
          </li>
        ))}
      </ul>
    </blockquote>
  )
}

export default ExperienceBlockquote;