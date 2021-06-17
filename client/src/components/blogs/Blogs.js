import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogList from './BlogList';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect( () => {
    axios.get("/api/blogs")
      .then( res => {
        setBlogs(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addBlog = (blog) => {
    // { blog: {title: "asdfas", category: "adsfa"}}
    axios.post("/api/blogs", { blog } )
      .then( res => {
        setBlogs([...blogs, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateBlog = (id, blog) => {
    axios.put(`/api/blogs/${id}`, { blog } )
      .then( res => {
        const updatedBlogs = blogs.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b
        })
        setBlogs(updatedBlogs)
      })
      .catch( err => console.log(err) )
  }

  const deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
      .then( res => {
        setBlogs( blogs.filter( b => b.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return(
    <>
      <h1>
        Blogs
      </h1>
      <BlogList blogs={blogs} updateBlog={updateBlog} deleteBlog={deleteBlog} />
    </>
  )
}

export default Blogs;