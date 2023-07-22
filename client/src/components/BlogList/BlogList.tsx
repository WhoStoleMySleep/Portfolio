import BlogCard from '../BlogCard/BlogCard';
import searchProducts from '../../lib/searchProducts';
import styles from './BlogList.module.scss';
import { useState } from 'react';
import useDebounce from '../../lib/hooks/useDebounce';

function BlogList({allBlogs}: {allBlogs: {id: string, conciseContent: string, date: string, name: string, headImageLink: string, tags: string}[]}) {
  const [ query, setQuery ] = useState('') 
  const debouncedSearchTerm = useDebounce(query, 300)

  return (
    <span className={styles["blog-list"]}>
      <input 
        type="text" 
        className={styles["blog-list__search-input"]} 
        onChange={(event) => setQuery(event.target.value)} 
        placeholder='Search by text or @tag'
      />
      <ul className={styles["blog-list__blogs"]}>
        {allBlogs.map((
          x: {
            id: string, 
            conciseContent: string, 
            date: string, 
            name: string, 
            tags: string,
            headImageLink: string
          }, 
          i: number
        ) => searchProducts(x.name, debouncedSearchTerm, x.tags) ? (
          <li key={i}>
            <BlogCard 
              id={x.id}
              altImage="img" 
              conciseContent={x.conciseContent}
              datePublish={x.date} 
              headImage={one} 
              tags={x.tags}
              themeName={x.name}
            />
          </li>
        ) : '')}
      </ul>
    </span>
  );
}

export default BlogList;
