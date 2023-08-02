import Blog from '../../components/Blog/Blog';
import UndefinedBlog from '../../components/Custom404/Custom404';
import { useQuery } from '@apollo/client';
import { FIND_BLOG } from '../../GraphQl.queries';
import { useSelector } from 'react-redux';
import blogs from '../../redux/reducers/selectors/blogs/blogs';

function BlogPage() {
  const currentPath = window.location.pathname.slice(1);
  const allBlogs = useSelector(blogs);
  const blog = allBlogs.find((blog: any) => blog.id === currentPath)
  const { loading, data } = useQuery(FIND_BLOG, {
    variables: {
      id: currentPath
    }
  })
  
  if (!blog && loading) return <p>Loading...</p>
  if (blog !== -1 || data.blog) return <Blog blog={blog || data.blog} />
  else return <UndefinedBlog />
}

export default BlogPage;
