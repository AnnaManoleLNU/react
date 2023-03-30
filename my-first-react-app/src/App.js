import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import BlogList from './BlogList';
import useFetch from './useFetch';

// has to start with a capital letter
// not a function, but a component
// a component is a function that returns JSX
// in JSX, you can't use class, you have to use className
function App() {
  const { data } = useFetch('http://localhost:8000/blogs')

  // you can write any valid JS before you return the JSX template
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/anna">
              {data && <BlogList blogs={data.filter((blog => blog.author ==='Anna'))} title="Anna's Blogs" />}
            </Route>
            <Route exact path="/jonas">
              {data && <BlogList blogs={data.filter((blog) => blog.author === 'Jonas')} title="Jonas's Blogs" />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

// at the end we always export our component so that we can use it in index.js
export default App;
