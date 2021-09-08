import React, { useState } from 'react'
import "./TextForm.css"
function TextForm(props) {
    
   const [text, setText] = useState("");

   const handleUpClick = (event)=>{
    let newText = text.toUpperCase();   
    setText(newText);
   }

   const handleOnChange = (event) =>{
       setText(event.target.value)
   }
   const handleLoClick = () =>{
       let newText = text.toLowerCase();
       setText(newText)

   }
   const handleClearClick = () =>{
       setText("")
   }
   const handleCopy = () =>{
    navigator.clipboard.writeText(text); 


   }
   const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   }



    return (
        <>
         <div className="container" > 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea idclassName="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"  ></textarea>
            </div>
            <button id="btn" disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
            
  
  
        </>
    )
}

export default TextForm
