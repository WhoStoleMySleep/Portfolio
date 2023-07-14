import styles from './Blog.module.scss'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import generateHexColorCode from '@/app/lib/generateHexColorCode';



export default async function BlogPage({blog}: any) {
  const { headImageLink, imagePosition, name, tags, text, date, author } = blog
  const tagsArr = tags.trim().split(',')

  return (
    <div className={styles["blog"]}>
      <span className={styles["blog__head-image"]} style={{backgroundImage: `url(${headImageLink})`, backgroundPosition: `${imagePosition}`}}></span>
      <div className={styles["blog__head"]}>
        <h1 className={styles["blog__title"]}>{name}</h1>
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
        {text.map((element: string, id: number) => (
          <ReactMarkdown className={styles["blog__text-element"]} key={id}>{element}</ReactMarkdown>
        ))}
      </div>
    </div>
  )
}
