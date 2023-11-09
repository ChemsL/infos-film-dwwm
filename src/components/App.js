import Home from './Home/home';
import './App.css'
import { useState } from 'react';

function App() {
  const [animation, setAnimation] = useState(true)
  const toggleAnimation = () => {
  console.log(animation)
  setAnimation(animation => !animation)
  }
    
  return (
    <div className="App">
      <Home/>      
      <button className="App-button" onClick={toggleAnimation} >Modifier l’animation</button>
      
    </div>
  );
}

export default App;
