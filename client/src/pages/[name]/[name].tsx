import Blog from '../../components/Blog/Blog';
import UndefinedBlog from '../../components/Custom404/Custom404';
import { useQuery } from '@apollo/client';
import { FIND_BLOG } from '../../GraphQl.queries';

export default function BlogPage() {
  const currentPath = window.location.pathname.slice(1);
  const { loading, data } = useQuery(FIND_BLOG, {
    variables: {
      id: currentPath
    }
  })
  
  if (loading) return <p>Loading...</p>
  if (data && data.blog) return <Blog blog={data.blog} />
  else return <UndefinedBlog />
}
