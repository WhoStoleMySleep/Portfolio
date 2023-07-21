import { lazy, Suspense, useEffect, useState } from 'react';
import styles from './BlogMain.module.scss';
import { gql, useQuery } from '@apollo/client';
import { ALL_BLOGS } from '../../GraphQl.queries';

const BlogList = lazy(() => import('../BlogList/BlogList'));

function BlogMain() {
  const allBlogs = ' ';
  let query = ''
  let data = useQuery(ALL_BLOGS).data;

  return (
    <div className={styles.blog}>
      <h3 className={styles.blog__title}>Blog Posts</h3>
      <div className="call"></div>
      <Suspense fallback={<div>Loading...</div>}>
        {<BlogList allBlogs={data ? data.blogs : []} />}
      </Suspense>
    </div>
  );
}

export default BlogMain;
