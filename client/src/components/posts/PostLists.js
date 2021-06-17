import Post from './Post';

const PostList = ({ blogId, posts, updatePost, deletePost }) => (
  <>
    { posts.map( p => 
      <Post {...p} updatePost={updatePost} deletePost={deletePost} />  
    )}
  </>
)

export default PostList;