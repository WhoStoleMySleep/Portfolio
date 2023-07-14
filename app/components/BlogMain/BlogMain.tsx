import { lazy, Suspense } from 'react';
import styles from './BlogMain.module.scss';

const BlogList = lazy(() => import('../BlogList/BlogList'));

async function BlogMain() {
  const allBlogs = '';
  let query = ''

  return (
    <div className={styles.blog}>
      <h3 className={styles.blog__title}>Blog Posts</h3>
      <Suspense fallback={<div>Loading...</div>}>
        {allBlogs ? <BlogList allBlogs={allBlogs} /> : 'Not Found'}
      </Suspense>
    </div>
  );
}

export default BlogMain;
