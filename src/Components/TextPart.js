import React, { useState } from 'react'

export default function TextPart(props) {



    

    const handleTitleClick = () => {
        let newText = text.split(' ').map(function (word, index) {
            return word.charAt(0)
                .toUpperCase() + word.slice(1)
                    .toLowerCase();
        })
            .join(' ');
        setText(newText)
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleClearClick = () => {
        setText('')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <div className="main-page"  >
            <div className="container my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} placeholder="Enter Text Here..................." value={text} onChange={handleOnChange} rows="8" id="floatingTextarea"></textarea>
                </div>
                <button className="btn btn-secondary" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-warning mx-2" onClick={handleTitleClick}>TitleCase</button>
                <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                <br />
                <br />
                <button className="btn btn-success" onClick={handleLowerClick}>LowerCase</button>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 >Text Summary</h1>
                <p > No. of words are {text.split(" ").length} and No. of Letters are {text.length}</p>
            </div>


        </div>
    )
}
