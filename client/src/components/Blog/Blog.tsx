import styles from './Blog.module.scss'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import generateHexColorCode from '../../lib/generateHexColorCode';
import { useTranslation } from 'react-i18next';
import { resources } from '../../i18n';
import { translationRu } from '../../locales/ru/translation';

export default function Blog({blog}: {blog: {id: string, headImageLink: string, imagePosition: string, name: string[], tags: string, text: any, date: string, author: string}}) {
  const { headImageLink, imagePosition, name, tags, text, date, author } = blog
  const tagsArr = tags.trim().split(',')
  const { t } = useTranslation()
  resources.ru.translation = {...(resources.ru.translation), ...translationRu(text[0], text[1]), ...translationRu([name[0]], [name[1]])}
  
  return (
    <div className={styles["blog"]}>
      <span className={styles["blog__head-image"]} style={{backgroundImage: `url(${headImageLink})`, backgroundPosition: `${imagePosition}`}}></span>
      <div className={styles["blog__head"]}>
        <h1 className={styles["blog__title"]}>{t(name[0])}</h1>
        <ul className={styles["blog__tag-list"]}>
          {tagsArr.map((element: string, id: number) => 
            <li 
              key={id} 
              className={styles["blog__tag"]} 
              style={{backgroundColor: generateHexColorCode(tagsArr[id])}}
            >
              <p className={styles["blog__tag-name"]}>
                {element}
              </p>
            </li>
          )}
        </ul>
        <p className={styles["blog__date"]}>
          {date}
        </p>
        <p className={styles["blog__author"]}>
          {author}
        </p>
      </div>
      <div className={styles["blog__text"]}>
        {text[0].map((element: string, id: number) => (
          <ReactMarkdown className={styles["blog__text-element"]} key={id}>{t(element)}</ReactMarkdown>
        ))}
      </div>
    </div>
  )
}
