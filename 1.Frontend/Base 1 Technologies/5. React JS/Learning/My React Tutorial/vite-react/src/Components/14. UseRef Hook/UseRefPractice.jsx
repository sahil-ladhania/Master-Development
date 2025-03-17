import {useRef} from "react";

function UseRefPractice() {
    // UseRef Hook
    const inputRef = useRef(null);
    console.log(inputRef);
    // Handler Function
    const handleButtonClick = () => {
        console.log(inputRef.current);
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }
    return (
        <>
            <div className="p-20">
                <div className="mb-10">
                    <input 
                        ref={inputRef} 
                        className="p-4 mr-4 border border-black outline-none" 
                        type="text" 
                        placeholder="Enter Something..."/>
                    <button onClick={handleButtonClick} className="bg-amber-300 p-4">Focus Input</button>
                </div>
            </div>
        </>
    );
}

export default UseRefPractice;