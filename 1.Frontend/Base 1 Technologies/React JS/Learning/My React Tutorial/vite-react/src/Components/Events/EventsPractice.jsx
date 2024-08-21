
function EventsPractice() {
    const handleClick = (eventObj) => {
        console.log("Button Clicked");
        console.log(eventObj);
    }
    const handledoubleClick = (eventObj) => {
        console.log("Button Clicked");
        console.log(eventObj);
    }
    const handleMouseOver = (eventObj) => {
        console.log("On MouseOver");
        console.log(eventObj);
    }
    const handleMouseOut = (eventObj) => {
        console.log("On MouseOut");
        console.log(eventObj);
    }
    const handleKeyUp = (eventObj) => {
        console.log("On KeyUp");
        console.log(eventObj);
    }
    const handleKeyDown = (eventObj) => {
        console.log("On KeyDown");
        console.log(eventObj);
    }
    const handleFormSubmission = (eventObj) => {
        eventObj.preventDefault();
        console.log("Form Submitted...");
        console.log(eventObj);
    }
    const handleNameChange = (eventObj) => {
        console.log("Name Feild Changed : " , eventObj.target.value);
        console.log(eventObj);
    }
    const handleEmailChange = (eventObj) => {
        console.log("Email Feild Changed : ", eventObj.target.value);
        console.log(eventObj);
    }
    const handlePasswordChange = (eventObj) => {
        console.log("Password Feild Changed : ", eventObj.target.value);
        console.log(eventObj);
    }
    const handleNameFocus = (eventObj) => {
        console.log("Name Feild Focused : ");
        console.log(eventObj);
    }
    const handleEmailFocus = (eventObj) => {
        console.log("Email Feild Focused : ");
        console.log(eventObj);
    }
    const handlePasswordFocus = (eventObj) => {
        console.log("Password Feild Focused : ");
        console.log(eventObj);
    }
    const handleNameBlur = (eventObj) => {
        console.log("Name Feild Blurred : ");
        console.log(eventObj);
    }
    const handleEmailBlur = (eventObj) => {
        console.log("Email Feild Blurred : ");
        console.log(eventObj);
    }
    const handlePasswordBlur = (eventObj) => {
        console.log("Password Feild Blurred : ");
        console.log(eventObj);
    }
    window.addEventListener('load' , (eventObj) => {
        console.log("Page Loaded...");
        console.log(eventObj);
    })
    window.addEventListener('resize' , (eventObj) => {
        console.log("Page Resized...");
        console.log(eventObj);
    })
    window.addEventListener('scroll' , (eventObj) => {
        console.log("Page Scrolled...");
        console.log(eventObj);
    })

    return (
        <>
            <div className="p-20">
                <h1 className="pb-5">Practice Events !!!</h1>
                {/* Mouse Events -> click , dblclick , mouseover , mouseout */}
                <h2 className="py-4">Mouse Events :-</h2>
                {/* OnClick */}
                <button onClick={handleClick} className="bg-amber-300 p-4 mr-4">
                    Click Me
                </button>
                <button onClick={() => console.log("Button Clicked Again")} className="bg-amber-300 p-4 mr-4">
                    Click Me Again
                </button>
                <button onClick={(e) => console.log("From 3rd Button : ", e)} className="bg-amber-300 p-4 mr-4">
                    Click Me Again
                </button>
                {/*  onDoubleClick  */}
                <button onDoubleClick={handledoubleClick} className="bg-amber-300 p-4 mr-4">
                    Click 2 Times
                </button>
                {/* onMouseOver */}
                <button onMouseOver={handleMouseOver} className="bg-amber-300 p-4 mr-4">
                    Click 2 Times
                </button>
                {/* onMouseOut */}
                <button onMouseOut={handleMouseOut} className="bg-amber-300 p-4 mr-4">
                    Click 2 Times
                </button>
                {/* Keyboard Events -> keyup , keydown */}
                <h2 className="py-4">Keyboard Events :-</h2>
                <input onKeyUp={handleKeyUp} className="outline p-4 mr-4" placeholder="Enter Your Name..."/>
                <input onKeyDown={handleKeyDown} className="outline p-4" placeholder="Enter Your Name..."/>
                {/* Form Events -> submit , change , focus , blur */}
                <h2 className="py-4">Form Events :-</h2>
                <form onSubmit={handleFormSubmission}>
                    <input onChange={handleNameChange} onFocus={handleNameFocus} onBlur={handleNameBlur}
                            className="outline p-4 mr-4" type="text" placeholder="Enter Your Name..."/>
                    <input onChange={handleEmailChange} onFocus={handleEmailFocus} onBlur={handleEmailBlur}
                            className="outline p-4 mr-4" type="email" placeholder="Enter Your Email..."/>
                    <input onChange={handlePasswordChange} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur}
                            className="outline p-4 mr-4" type="password" placeholder="Enter Your Password..."/>
                    <input className="bg-amber-300 p-4 cursor-pointer" type="submit"/>
                </form>
                {/* Window Events -> load , resize , scroll */}
                <h2 className="py-4">Window Events :-</h2>
            </div>
        </>
    );
}

export default EventsPractice;