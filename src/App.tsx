import React from 'react';

import './App.css';
import Home from './Home';
import Persondetails from './Persondetails';

function App() {
  const Details={
    FName:"Virat",
    LastName:"Kohli",
    Age:35,
    isVegan:false
  }
  return (
    <div className="App">
    {/* <Home name="abhis" age={25} iselgigible={false}/> */}
    <Persondetails Details={Details}/>

    </div>
  );
}

export default App;
