
const Post = ({ id, title, body, author, blog_id, updatePost, deletePost }) => {
  
  return(
    <>
      <h1>{title}</h1>
      <h2>By: {author}</h2>
      <p>{body}</p>
      <button>Edit</button>
      <button>Delete</button>
    </>
  )
}

export default Post;