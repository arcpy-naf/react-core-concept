import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks= ["kasem", "rubel", "avijit" ]
  const products = [
    {name: "Photoshop", price: "100$"},
    {name: "Illustrator", price: "60$"},
    {name: "PDF Reader", price: "10$"}
  ]
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  
  //const productNames = products.map(product =>product.name);
  //console.log(productNames)
    return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayo =><li>{nayo}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }  

        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person></Person>   

    

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount (count +1);
  
  return(
  <div>
    <h1>Counter: {count} </h1>
    <button onClick={() => setCount (count -1)} >Decrease</button>
    <button onClick={() => setCount (count +1)} >Increase</button>
  </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3> Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}



function Product(props){
  const styleProduct={
    border: "2px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    color: "blue",
    padding: "20px",
    margin:"20px"
  }
  const {name, price} = props.product;
  console.log(props);
return (
  <div style={styleProduct}>
    <h2>{name}</h2>
<h1>{price}</h1>
    <button>Buy Now</button>
  </div>
)
}


function Person(props){
  const personStyle={
    border: "2px solid red" , color: "red", margin: '50px', width: "400px", height: "500px",
    padding: "10px" 
  }
  return <div style={personStyle} >
  <h1>Name: {props.name }</h1>
<h3>Service: {props.job}</h3>
  </div>
}

export default App;
