import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log('UpperCase was Clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }
    const handleLoClick = () => {
        // console.log('LowerCase was Clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }
    const handleRemoveSpaces = () => {
        // console.log('LowerCase was Clicked' + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed the spaces","success")
    }
    const handleClearClick = () => {
        // console.log('LowerCase was Clicked' + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success")
    }
    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#ada5a5':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>

            </div>
        </>
    )
}
