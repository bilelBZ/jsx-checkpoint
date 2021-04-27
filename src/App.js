import './App.css';
import './style.css';
import React from 'react';
 import Mohsen from "./images/imageInSrc.jpg";
 import ReactPlayer from 'react-player'

const divStyle = {
  border: 'solid 1px black',
  maxwidth: '100vw',
};
function App() {
  return (
    <div className="App">
     <div style={divStyle}>

<h1 className="title red">Your name here</h1>

<div className="images">
  <img className='image' src={Mohsen} alt="aa" /> 
  <img className='image' src="/imageInPublic.jpg" alt="zzz" />
</div>

</div>

  <ReactPlayer url="https://www.youtube.com/embed/cja3QJaJrAM"/>




    </div>
  )
}

export default App;
