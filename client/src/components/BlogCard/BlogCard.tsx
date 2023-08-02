import styles from './BlogCard.module.scss';
import generateHexColorCode from '../../lib/generateHexColorCode';
import { Link } from 'react-router-dom';
import { resources } from '../../i18n';
import { translationRu } from '../../locales/ru/translation';
import { useTranslation } from 'react-i18next';

function BlogCard(prop: {
  id: string,
  headImage: string,
  altImage: string,
  themeName: string[],
  conciseContent: string[],
  datePublish: string,
  tags: string,
}) {
  const { 
    id,
    headImage, 
    altImage, 
    themeName, 
    conciseContent,
    datePublish,
    tags,
  } = prop
  const tagsArr = tags.trim().split(',')

  const { t } = useTranslation()
  resources.ru.translation = {...(resources.ru.translation), ...translationRu([conciseContent[0]], [conciseContent[1]]), ...translationRu([themeName[0]], [themeName[1]])}
  

  return (
    <Link to={`${id}`} className={styles["blog-card"]}>
      <span className={styles["blog-card__head-image"]} style={{backgroundImage: `url(${headImage})`}}></span>
      <img src={headImage} alt={altImage} className={styles["blog-card__head-image"]} loading='lazy' />
      <div className={styles["blog-card__text-wrapper"]}>
        <h2 className={styles["blog-card__theme-name"]}>{t(themeName[0])}</h2>
        <p className={styles["blog-card__concise-content"]}>{t(conciseContent[0])}</p>
        <p className={styles["blog-card__date-publish"]}>{datePublish}</p>
        <ul className={styles["blog-card__tag-list"]}>
          {tagsArr.map((element, id) => 
            <li key={id} className={styles["blog-card__tag"]} style={{backgroundColor: generateHexColorCode(tagsArr[id])}} /* style={{"backgroundColor": colors[colorN[id]]}} */>
              <p className={styles["blog-card__tag-name"]}>
                {element}
              </p>
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
}

export default BlogCard;
