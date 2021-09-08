import { Fragment ,} from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {

  return (
    <Fragment>
       <NavBar  />
    // <div className="container">
    <About/>

     
    {/* //   <TextForm heading = " text to b analzyed"/> */}
     </div>
  </Fragment>
  );
}

export default App;
