import Image from 'next/image'
import Link from 'next/link';
import styles from './BlogCard.module.scss';
import generateHexColorCode from '@/app/lib/generateHexColorCode';

function BlogCard(prop: {
  id: string,
  headImage: any,
  altImage: string,
  themeName: string,
  conciseContent: string,
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

  return (
    <Link href={`${id}`} className={styles["blog-card"]}>
      <Image src={headImage} alt={altImage} className={styles["blog-card__head-image"]} loading='lazy' />
      <div className={styles["blog-card__text-wrapper"]}>
        <h2 className={styles["blog-card__theme-name"]}>{themeName}</h2>
        <p className={styles["blog-card__concise-content"]}>{conciseContent}</p>
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
