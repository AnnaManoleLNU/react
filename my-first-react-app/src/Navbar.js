import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <nav className="navbar">
    <h1>The Anna Blog</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
      <Link to="/yoshi">Yoshi's Blogs</Link>
      <Link to="/mario">Mario's Blogs</Link>
    </div>
    </nav>
  );
}

export default Navbar;