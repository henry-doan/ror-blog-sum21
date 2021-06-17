import Posts from "../posts/Posts";

const Blog = ({ id, title, category, updateBlog, deleteBlog }) => {

  return(
    <>
      <h1>{title}</h1>
      <h3>Category: {category}</h3>
      <button onClick={ () => deleteBlog(id) }>Delete Blog</button>
      <Posts blogId={id} />
    </>
  )
}

export default Blog;