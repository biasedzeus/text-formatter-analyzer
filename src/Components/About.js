import React,{useState} from 'react'

function About(props) {
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const [style, setStyle] = useState({
        backgroundColor:'white',
        color:'black'
    })

    const handleToggle = () =>{
        if(style.color === 'white')
        {
            setStyle({
                backgroundColor:'white',
                color:'black'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setStyle({
                backgroundColor:'black',
                color:'white'
            })
            setBtnText("Enable Light Mode")
        }
    }


    return (
                    <div className="accordion" id="accordionExample" style={style}>
                    <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Textify Web Application
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>Textify Web App .</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        UpperCase Handling
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="headingThree"style={style}>
                        <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        LowerCase Handling 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>LowerCase Handling.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                    </div>

                    {/* Button theme mode */}
                    <div className="my-3"style={style}>
                    <button onClick={handleToggle} type="button" className="btn ">{btnText}</button>
                    </div>
                </div>
    )
}

export default About
