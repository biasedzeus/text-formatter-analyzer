import { Fragment, useState } from "react";
import "./App.css";

// Components
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //to check system is set to dark or light theme
  const isSystemDark = window.matchMedia("(prefers-color-scheme:dark)").matches;


//STATES
  const [darkMode, setDarkMode] = useState(isSystemDark);
  const [alert, setAlert] = useState({message:"kuch bhi",
type:"success"});



  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
  };

  console.log(isSystemDark);


  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };

  const toggleMode = () => {
    setDarkMode((toggle) => !toggle)
    darkMode?toast("Light Mode Enabled"):toast("Dark Mode Enabled");
  };
  //to set bg of whole body based on theme toggle
  if (darkMode) {
    document.body.style.backgroundColor = "black";
    
  } else {
    document.body.style.backgroundColor = "white";
  }

  return (
    <div style={darkMode ? darkTheme : lightTheme}>
      <NavBar
        mode={darkMode}
        toggleMode={toggleMode}
        toggler={darkMode ? "Set Light Mode" : "Set Dark Mode"}
        mode={darkMode ? "dark" : "light"}
      />



      <Alert alert={alert} />


      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={
        darkMode?"dark":"light"
      }/>


      <div className="container">{/* <About/> */}</div>
      <TextForm
        heading=" Text To Be Analzyed"
        mode={darkMode ? "dark" : "light"}
      />
      {/* <button onClick={()=>setDarkMode(toggle =>!toggle)}>Switch Theme</button> */}
    </div>
  );
}

export default App;
