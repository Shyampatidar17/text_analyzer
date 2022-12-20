import React , {useState} from "react";

export default function TextFrom(props) {
  const[text,setText] = useState("")
  // text="new text"; //wrong way to change state
  // setText="new text"; //Correct way to change state

   const handleUpClick =()=>{
    // console.log("Uppercase was clicked " + text);
    setText(text.toUpperCase());
    props.showAlert(" Converted to UpperCase " , " Success ")
   }
   const handleLoClick =()=>{ 
    setText(text.toLowerCase())
    props.showAlert(" Converted to LowerCase " , " Success ")
   }
   const handleCapitalize=()=>{
    let capCaseText = text.split(" ");
    // console.log(capCaseText)

   const word = capCaseText.map((elem)=>{
      return elem[0].toUpperCase() + elem.slice(1)
    }).join(" ");

    // for(let i=0;i<capCaseText.length;i++){
    //   // console.log(capCaseText[i])
    //  capCaseText[i] = capCaseText[i][0].toUpperCase() + capCaseText[i].slice(1)
    // }
    // console.log(capCaseText.join(' '))
    
    // console.log(word)

    setText(word)
    props.showAlert(" Converted every first character of word in to upperCase " , " Success ")
   }

   const handleClear =()=>{
      setText("")
      props.showAlert(" Clear Text" , " Success ")
   } 
   const handleCopy = ()=>{
    const text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()

    props.showAlert(" Copy Text to Clipboard " , " Success ")

   }

   const handleExtraSpaces=()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
     props.showAlert(" Remove all extra space in between word " , " Success ")
   }

   const handleOnChange =(event)=>{
    // console.log("On change")
    setText(event.target.value)
   }

  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className=" mb-3">
        <h2 className="mb-4">{props.heading}</h2>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>

      <button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick} disabled={text.length ===0}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length ===0}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleCapitalize} disabled={text.length ===0}>Capitalized Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length ===0}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces} disabled={text.length ===0}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleClear} disabled={text.length ===0}>Clear Text</button>
      </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p><b>{text.split(/\s+/).filter((elem)=>{return elem.length!== 0}).length}</b> Words and <b>{text.length} </b>Characters</p>
      <p><b>{0.008 * text.split(" ").filter((elem)=>{return elem.length!== 0}).length}</b> Minute to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview! "}</p>
    </div>
    </>
  );
}
