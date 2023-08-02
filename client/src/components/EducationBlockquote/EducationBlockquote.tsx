import { useTranslation } from 'react-i18next';
import styles from './EducationBlockquote.module.scss';

function EducationBlockquote({EducationData}: {
  EducationData: {
    faculty: string, 
    place: string, 
    dates: string
  }
}) {
  const { faculty, place, dates } = EducationData
  const { t } = useTranslation()
  
  return (
    <blockquote className={styles["education-blockquote"]}>
      <p className={styles["education-blockquote__faculty"]}>
        {t(faculty)}
      </p>
      <span className={styles["education-blockquote__place-or-date"]}>
        <p className={styles["education-blockquote__place-of-study"]}>
          {t(place)}
        </p>
        <time className={styles["education-blockquote__study-dates"]} dateTime={dates}>
          {dates}
        </time>
      </span>
    </blockquote>
  )
}

export default EducationBlockquote;