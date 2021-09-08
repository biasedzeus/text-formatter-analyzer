import { Fragment ,useState} from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {
  //to check system is set to dark or light theme
  const isSystemDark = window.matchMedia("(prefers-color-scheme:dark)").matches

  const [darkMode, setDarkMode] = useState(isSystemDark);


  console.log(isSystemDark)
  
  //to set bg of whole body based on theme toggle
  if(darkMode){
    document.body.style.backgroundColor="black"
  }
  else {
    document.body.style.backgroundColor="white"
  }

  const lightTheme = {
    backgroundColor : "white",
    color : "black",
  

  }

  const darkTheme = {
    backgroundColor : "black",
    color : "white"
  }


  const toggleMode = () =>{
    
    setDarkMode(toggle =>!toggle)


  }

  return (
    < div style={darkMode?darkTheme:lightTheme}>
       <NavBar  mode={darkMode} 
       toggleMode={toggleMode} 
       toggler={darkMode?"Set Light Mode":"Set Dark Mode"}
       mode ={darkMode?"dark":"light"}
       
       />
       
     <div className="container">
    {/* <About/> */}
  </div>
  <TextForm heading = " Text To Be Analzyed"
       mode ={darkMode?"dark":"light"}
       />
  {/* <button onClick={()=>setDarkMode(toggle =>!toggle)}>Switch Theme</button> */}
     
  </div>
  );
}

export default App;
