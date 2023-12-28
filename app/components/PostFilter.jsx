'use client'
import { posts } from '../constants/posts'
import React, { useEffect } from 'react'
import clsx from 'clsx'

const PostFilter = ({setFiltered, setActiveCategory, activeCategory}) => {

    useEffect(() => {
      if (activeCategory === "all") {
        setFiltered(posts)
        return
      }
      
      const filtered = posts.filter((post) => post.tags?.includes(activeCategory))
      setFiltered(filtered)

    }, [activeCategory])
    
  return (
    <div className='flex gap-5 my-10 flex-wrap justify-center dark:text-white'>
        <button 
            onClick={() => setActiveCategory("all")}
            className={clsx("py-1 px-3",
            activeCategory === "all" ? 'bg-sky-400 text-white rounded-md' : null)}
        >
            All
        </button>
        <button 
        onClick={() => setActiveCategory("web development")}
        className={clsx("py-1 px-3",
        activeCategory === "web development" ? 'bg-sky-400 text-white rounded-md' : null)}>
            Web Development
        </button>
        <button 
        onClick={() => setActiveCategory("cybersecurity")}
        className={clsx("py-1 px-3",
        activeCategory === "cybersecurity" ? 'bg-sky-400 text-white rounded-md' : null)}>
            CyberSecurity
        </button>
        <button 
        onClick={() => setActiveCategory("mobile development")}
        className={clsx("py-1 px-3",
        activeCategory === "mobile development" ? 'bg-sky-400 text-white rounded-md' : null)}>
            Mobile Development
        </button>
        <button 
        onClick={() => setActiveCategory("artificial intelligence")}
        className={clsx("py-1 px-3",
        activeCategory === "artificial intelligence" ? 'bg-sky-400 text-white rounded-md' : null)}>
            Artificial Intelligence
        </button>
    </div>
  )
}

export default PostFilter