import React, {useState} from 'react';
export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newtext = '';
        setText(newtext)
        props.showAlert("Text Cleared!","success");
    }
    
    
    const handleOnChange = (event) =>{
        //console.log("On Changed");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        //console.log("Uppercase was clicked" + text);

        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!","success");
    }
    

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
