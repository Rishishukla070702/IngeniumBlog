import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
        <span className="headerTitleSm">Ingeniumedu</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        
        src="https://www.jotform.com/blog/wp-content/uploads/2023/02/google-form-header-image-size-1280x500.jpg"
        alt=""
      />
    </div>
  )
}
