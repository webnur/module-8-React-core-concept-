import logo from './logo.svg';
import './App.css';

const singers = [
  {name: 'sanina', job:'singer'},
  {name: 'jabina', job:'super'},
  {name: 'kabila', job:'actor'},
  {name: 'salman shah', job:'hero'},
]

function App() {
  // const nayoks = ['sakib', 'alomgir', 'joshim', 'bapparaz']
  return (
    <div className='app'>
      
     {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
     } */}

     {
      singers.map(singer => <Person name={singer.name}></Person>)
     }


      {/* <Person name={nayoks[0]} naika="opu bissas"></Person>
      <Person name={nayoks[1]} naika="chekakhor"></Person>
      <Person name={nayoks[2]} naika="chekakhor"></Person> */}


    
      <p>another person added</p>
      <Friend name="Shamsul hok" phone="0927733"></Friend>
    </div>
  );
}

function Person (props){
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <h5>naika: {props.naika}</h5>
    </div>
  )
} 
function Friend (props){

  return (
    <div className='container'>
      <h4>name: {props.name}</h4>
      <h6>phone: {props.phone}</h6>
    </div>
  )
}
export default App;
