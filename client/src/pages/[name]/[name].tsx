import styles from './BlogPage.module.scss'
import Blog from '../../components/Blog/Blog';
import UndefinedBlog from '../../components/Custom404/Custom404';
import { useQuery } from '@apollo/client';
import { FIND_BLOG } from '../../GraphQl.queries';

export default function BlogPage() {
  const currentPath = window.location.pathname.slice(1);
  const { loading, data, error } = useQuery(FIND_BLOG, {
    variables: {
      id: currentPath
    }
  })

  if (loading) return <p>Loading...</p>
  if (error && data && data.blog) return <UndefinedBlog />
  return <Blog blog={data.blog} />
}
