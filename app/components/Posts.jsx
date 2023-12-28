'use client'
import PostCard from './PostCard'

const Posts = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [filtered, setFiltered] = useState([])
    const [visiblePosts, setVisiblePosts] = useState(6)
  
    const loadMorePost = () => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4)
    }
  
    return (
      <div className='w-full h-fit'>
        <div className="wrapper">
          <PostFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {filtered.slice(0, visiblePosts).map((post, index) => (
                <PostCard post={post} index={index} />
            ))}
          </div>
          <div className="py-10">
            {visiblePosts < filtered.length && (
                <div className="text-center mt-4">
                    <button className="bg-sky-400 hover:bg-sky-200 py-2 px-4 text-white rounded-md" 
                    onClick={loadMorePost}>
                        Show More
                    </button>
                </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default Posts