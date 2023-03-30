import { useState } from "react"

const Home = () => {
  // when you need a reactive value you use state hook, you give it an initial value
  const [name, setName] = useState('Anna')
  const [age, setAge] = useState('30') // 30 is the initial value
  // the first parameter is automatically the event parameter, even without writing it
  const handleClick = (e) => {
    setName('Cooler Anna') // set it to a new value
    setAge(31) // set it to a new value
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target)
  }

  // The use hook provides us with a reactive value and change that value
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
       {/* anon function, if you pass the argument directly you invoke it */}
       {/* here the anon function gets access to the event object, if you want to use it pass it in as an argument, order does not matter */}
      <button onClick={(e) => handleClickAgain('Anna', e)}>Click me again</button>
    </div>
   );
}
 

export default Home;