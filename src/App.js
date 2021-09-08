import { Fragment ,useState} from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {
  //to check system is set to dark or light theme 

  const isSystemDark = window.matchMedia("(prefers-color-scheme:dark)").matches
  console.log(isSystemDark)

  const lightTheme = {
    backgroundColor : "white",
    color : "black"
  }

  const darkTheme = {
    backgroundColor : "black",
    color : "white"
  }

  const [darkMode, setDarkMode] = useState(isSystemDark);

  const toggleMode = () =>{
    setDarkMode(toggle =>!toggle)

  }

  return (
    < div style={darkMode?darkTheme:lightTheme}>
       <NavBar  mode={darkMode} toggleMode={toggleMode} toggler={darkMode?"Set Light Mode":"Set Dark Mode"}/>
       
    // <div className="container">
    {/* <About/> */}
  </div>
  <TextForm heading = " text to b analzyed"/>
  <button onClick={()=>setDarkMode(toggle =>!toggle)}>Switch Theme</button>
     
  </div>
  );
}

export default App;
