import React from 'react'
import About from '../Components/About'
import Blog from '../Components/Blog'
import Blog_details from '../Components/Blog_details'
 export const Blog_page = () => {
  return (
    <div>
        <About  about={"Latest Blog"} title={"Home / Latest Blog"}/>
        <Blog />
    </div>
  )
}

export const Details = () => {
  return (
    <div>
      <About  about={"Latest Blog"} title={"Home / Latest Blog"}/>
        <Blog_details />
    </div>
  )
}

