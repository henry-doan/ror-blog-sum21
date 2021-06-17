import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostLists';
import PostForm from './PostForm';

const Posts = ({ blogId }) => {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    axios.get(`/api/blogs/${blogId}/posts`)
      .then( res => {
        setPosts(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // const addPost = (blogId, post) => {
  const addPost = (post) => {
    axios.post(`/api/blogs/${blogId}/posts`, { post } )
      .then( res => {
        setPosts([...posts, res.data])
      })
      .catch( err => console.log(err))
  }

  const updatePost = (id, post) => {
    axios.put(`/api/blogs/${blogId}/posts/${id}`, { post } )
      .then( res => {
        const updatedPosts = post.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPosts(updatedPosts)
      }).catch( err => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete(`/api/blogs/${blogId}/posts/${id}`)
      .then( res => {
        setPosts( posts.filter( p => p.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Posts</h1>
      <PostForm addPost={addPost} />
      <PostList 
        blogId={blogId} 
        posts={posts} 
        updatePost={updatePost}
        deletePost={deletePost}
      />
    </>
  )
}

export default Posts;