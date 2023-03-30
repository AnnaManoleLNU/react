const Home = () => {

  // the first parameter is automatically the event parameter, even without writing it
  const handleClick = (e) => {
    console.log('I have been clicked', e)
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
       {/* anon function, if you pass the argument directly you invoke it */}
       {/* here the anon function gets access to the event object, if you want to use it pass it in as an argument, order does not matter */}
      <button onClick={(e) => handleClickAgain('Anna', e)}>Click me again</button>
    </div>
   );
}
 

export default Home;