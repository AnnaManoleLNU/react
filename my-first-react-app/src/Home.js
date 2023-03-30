import BlogList from "./BlogList"
import useFetch from "./useFetch"


const Home = () => {
const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')  


  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {/* the thing on the right will be output once the left is true */}
      {data && <BlogList blogs={data} title="All Blogs!" />}
      {error && <div>{error}</div>}

      {data && <BlogList blogs={data.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs" />}
      
    </div>
  );
}


export default Home;