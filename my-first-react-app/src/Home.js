import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // use data from the server or communicate with the server in here
  // runs for every render
  // be careful not to create an infinite loop
  // use to fetch data from the server
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json()
        })
        .then(data => {
          setBlogs(data)
          setIsLoading(false)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {/* the thing on the right will be output once the left is true */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}


export default Home;