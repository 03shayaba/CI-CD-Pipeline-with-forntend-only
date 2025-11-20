import React from 'react'
import About from '../Components/About'
import Blog from '../Components/blog'
const Blog_page = () => {
  return (
    <div>
        <About  about={"Latest Blog"} title={"Home / Latest Blog"}/>
        <Blog />
    </div>
  )
}

export default Blog_page