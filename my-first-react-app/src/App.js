import Navbar from './Navbar';
import Home from './Home';

// has to start with a capital letter
// not a function, but a component
// a component is a function that returns JSX
// in JSX, you can't use class, you have to use className
function App() {
  // you can write any valid JS before you return the JSX template
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// at the end we always export our component so that we can use it in index.js
export default App;
