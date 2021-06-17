import Blog from './Blog';

const BlogList = ({ blogs, updateBlog, deleteBlog}) => (
  <>
    { blogs.map( b => 
      <>
        <Blog {...b} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        <hr />
      </>
    )}
  </>
)

export default BlogList;