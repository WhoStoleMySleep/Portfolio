import { lazy, Suspense, useEffect, useState } from 'react';
import styles from './BlogMain.module.scss';
import { useQuery } from '@apollo/client';
import { ALL_BLOGS } from '../../GraphQl.queries';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../redux/reducers/blogs';

const BlogList = lazy(() => import('../BlogList/BlogList'));

function BlogMain() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  let { data } = useQuery(ALL_BLOGS);
  const { blogs } = useSelector(
    (state: { blogs: any; }) => state.blogs
  );

  if (!blogs.length && data && data.blogs) {
    dispatch(setBlogs(data.blogs))
  }

  return (
    <div className={styles.blog}>
      <h3 className={styles.blog__title}>{t("Blog Posts")}</h3>
      <div className="call"></div>
      <Suspense fallback={<div>Loading...</div>}>
        {<BlogList allBlogs={blogs ? blogs : []} />}
      </Suspense>
    </div>
  );
}

export default BlogMain;
