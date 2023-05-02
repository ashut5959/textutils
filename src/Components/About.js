// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle , setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'whitr'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#2a5174',
        backgroundColor: props.mode === 'dark' ? '#2a5174':'white'
    }
    
    

  return (
    <div className="container" >
                <h1 style={ {color: props.mode === 'light' ? 'black' : 'white'}}>About Us</h1>
                <div className="accordion " id="accordionExample"  style={myStyle}>
                    <div className="accordion-item"  >
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About TextUtils</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This is a <strong>TextUtility App</strong> used for multiple use cases.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"
                        style={myStyle}
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Features</strong> 
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            1. Text Conversion <br />
                            2. Email Extraction <br />
                            3. Extra Space Rempver <br />
                        </div>
                        </div>
                    </div>
                    
                    </div> 
                    
    </div>
  )
}
