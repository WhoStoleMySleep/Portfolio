import { lazy, Suspense } from 'react';
import styles from './BlogMain.module.scss';
import { getAllBlogs } from '@/app/(server)/api/blog/data';

const BlogList = lazy(() => import('../BlogList/BlogList'));

async function BlogMain() {
  const allBlogs = await getAllBlogs();
  let query = ''

  return (
    <div className={styles.blog}>
      <h3 className={styles.blog__title}>Blog Posts</h3>
      <Suspense fallback={<div>Loading...</div>}>
        {allBlogs ? <BlogList allBlogs={allBlogs} /> : 'Error'}
      </Suspense>
    </div>
  );
}

export default BlogMain;
