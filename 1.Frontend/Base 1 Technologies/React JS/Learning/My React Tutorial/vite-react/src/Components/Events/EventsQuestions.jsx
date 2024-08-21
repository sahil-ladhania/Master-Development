
function EventsQuestions() {
    const handleClick = () => {
        alert("You Clicked Me !!!");
    }
    const handleMagicButton = () => {
        const magicButton = document.querySelector('.magic-button');
        magicButton.style.backgroundColor = "yellow";
    }
    const handleKeyDown = (eventObj) => {
        console.log("You Clicked : " , eventObj.key);
    }
    const handleLink = (eventObj) => {
        eventObj.preventDefault();
        console.log("You Clicked the Link...");
    }
    const handleInputFocus = (eventObj) => {
        eventObj.preventDefault();
        const input = document.querySelector('.input');
        input.focus();
    }

    return (
        <>
            <div className="p-20">
                <h1>Events Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Create a button that, when clicked, triggers an alert with a custom message.
                    </h2>
                    <button onClick={handleClick} className="bg-amber-400 p-4">Click Me</button>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Implement a button that, when clicked, changes the background color of a div element to a
                        specified color.
                    </h2>
                    <button onClick={handleMagicButton} className="mb-2 bg-amber-400 p-4">Click For Magic</button>
                    <div className="h-20 w-28 magic-button"></div>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Set up an input field that logs each key press to the console.
                    </h2>
                    <input onKeyDown={handleKeyDown} className="outline p-4" placeholder="Enter Something..."/>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Create a link that, when clicked, does not navigate to the URL but instead logs a message to
                        the console.
                    </h2>
                    <a onClick={handleLink} className="text-amber-800" href="https://www.google.com/">https://www.google.com/</a>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Create a form with an input field and a button. When the button is clicked, the input field should gain focus.
                    </h2>
                    <form>
                        <input className="outline p-4 mr-4 input" type="name" placeholder="Enter Something..."/>
                        <input onClick={handleInputFocus} className="bg-amber-400 p-4 cursor-pointer" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default EventsQuestions;