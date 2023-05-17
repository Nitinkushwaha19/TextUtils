import React,{useState}from 'react'

export default function Textform(props) {
    
  
  
    let upperCaseClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Change to UpperCase !","primary")
    }
    let lowerCaseClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Change to LowerCase !","primary")
    }

    let handleOnClick=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    let clear=()=>{
        setText("");
        props.showalert("Text Cleared !","primary")
    }
    
    let copy=()=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied !","primary")
    }

    const [text,setText] = useState("textArea field!");

    
   const countchar=()=>{
        let count = 0;
        let arr = text.split()
        arr.forEach(element => {
         if(!(element===" "))
         count++
        });
        return count;
   }

   let bakwas = countchar();


  return (
   <div style={props.mystyle}>
   <div className="container" style={props.mystyle} width="100%">
    <h3>{props.headings}</h3>
     <div className="mb-3" style={props.mystyle}>
      <textarea className="form-control" value={text} onkeydown="countchar()" style={props.mystyle} onChange={handleOnClick}id="exampleFormControlTextarea1" rows="8"></textarea>
     </div>
     <button type="button" onClick={upperCaseClick} className="btn btn-outline-info mx-1"> Uppercase</button>
     <button type="button" onClick={lowerCaseClick} className="btn btn-outline-info mx-1"> Lowercase</button>
     <button type="button" onClick={clear} className="btn btn-outline-info mx-1"> clear</button>
     <button type="button" onClick={copy} className="btn btn-outline-info mx-1"> copy Text</button>
    
     </div>
     
     <div className='container my-2'style={props.mystyle}>
        <h2>Your text summary ✌️</h2>
        <p>{text.split(" ").length} words {bakwas} characters</p>
        <p>{ 0.008 * text.split("").length} minutes  to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
     </div>
     </div>

     
    
  )
}

