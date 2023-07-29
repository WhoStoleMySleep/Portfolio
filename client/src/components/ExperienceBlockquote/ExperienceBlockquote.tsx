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
    
  return (
    <blockquote className={styles['experience-blockquote']}>
      <p className={styles["experience-blockquote__current-position"]}>
        {currentPosition}
      </p>
      <span className={styles["experience-blockquote__company-and-date"]}>
        <p className={styles["experience-blockquote__company"]}>
          {company}
        </p>
        <time className={styles["experience-blockquote__date"]} dateTime={date}> 
          {date}
        </time>
      </span>
      <ul className={styles["experience-blockquote__job-duties"]}>
        {jobDuties.map((item, index) => (
          <li key={index} className={styles["experience-blockquote__job-duties-item"]}>
            <p className={styles["experience-blockquote__job-title"]}>{item.jobTitle}</p>
            <p className={styles["experience-blockquote__job-description"]}>{item.jobDescription}</p>
          </li>
        ))}
      </ul>
    </blockquote>
  )
}

export default ExperienceBlockquote;