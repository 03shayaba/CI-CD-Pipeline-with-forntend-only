import React from 'react'
import blog from '../assets/blog-1.jpg'
const Blog = () => {
  return (
    <div>
      <div className=' flex'>
        <div className=' ml-40 border-1 border-gray-400 p-5 rounded-4xl mb-10 mt-10 w-200'>
          <img className='rounded-4xl' src={blog} alt="Blog" />
          <div>
            <h2><span>Written by:</span> Marry biden</h2>
            <p>14/03/2024</p>
          </div>
          <h1>Life won’s one Beast air Over above all</h1>
          <p>Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi.</p>

        </div>
        <div>
          <div>
            <label htmlFor="">Search</label>
            <input type="text" placeholder='Search Here...' />
          </div>
          <div>
            <h3>Categories</h3>
            <div>
              <p>Product presentation</p>
              <p>08</p>
            </div>
            <div>
              <p>Dedicated VedioCalls</p>
              <p>11</p>
            </div>
             <div>
              <p>Trending Challenge</p>
              <p>18</p>
            </div>
             <div>
              <p>Dance Awareness</p>
              <p>11</p>
            </div>
             <div>
              <p>Photography</p>
              <p>07</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog