import React, { useState } from 'react'
import { toast } from 'react-toastify';
import "./TextForm.css"

function TextForm(props) {
    
   const [text, setText] = useState("");

   const handleUpClick = (event)=>{
    let newText = text.toUpperCase();   
    setText(newText);
    toast("Text Upper Cased")
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
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#696969':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"   ></textarea>
            </div>
            <button id="btn" disabled={text.length===0} className="btn btn-light mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button id="btn" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
            
  
  
        </>
    )
}

export default TextForm
