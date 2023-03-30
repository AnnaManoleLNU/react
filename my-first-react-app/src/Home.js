import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario') // mario is the initial value

  const handleDelete = (id) => { 
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  // use data from the server or communicate with the server in here
  // runs for every render
  // be careful not to create an infinite loop
  // use to fetch data from the server
  useEffect(() => {
    console.log('use effect ran')
    console.log(name)
    // an empty array as a second argument means that the effect will only run once
    // if you want to run it every time the name changes, you can add name to the array
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title = 'All blogs' handleDelete={handleDelete} />
      {/* get only mario's blogs */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's blogs" handleDelete={handleDelete} />
      {/* get only yoshi's blogs */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi' )} title = "Yoshi's blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('Anna')}>Change name</button>
      <p>{name}</p>
    </div>
  );
}


export default Home;