import './App.css';

// has to start with a capital letter
// not a function, but a component
// a component is a function that returns JSX
// in JSX, you can't use class, you have to use className
function App() {
  // you can write any valid JS before you return the JSX template
  const title = 'Welcome to the new blog'
  const likes = 500
  // const person = {name: 'Anna', age: 30 } // will give error 
  // const bool = true // will give error 
  const link = 'http://www.google.com'
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times </p>
        <p>{'hello world'}</p>
        <p>{100}</p>
        <p>[1, 2, 3, 4]</p> 
        <p>{Math.random()* 10}</p>
        <a href= {link}>Google</a>
      </div>
    </div>
  );
}

// at the end we always export our component so that we can use it in index.js
export default App;
