import styles from './page.module.scss'
import Blog from '../components/Blog/Blog';
import UndefinedBlog from '../components/UndefinedBlog/UndefinedBlog';

export default async function BlogPage({ params }: any) {
  const { name: blogName } = params
  const blog = null

  return (
    <>
      {blog ? (
        <Blog blog={blog} />
      ) : (
        <UndefinedBlog />
      )}
    </>
  )
}
