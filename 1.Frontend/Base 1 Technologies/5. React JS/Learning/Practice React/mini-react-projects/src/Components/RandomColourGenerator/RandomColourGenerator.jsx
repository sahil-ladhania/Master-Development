import {useEffect, useState} from "react";

function RandomColourGenerator() {
    // State Variables
    const [color, setColor] = useState("#FFFFFF");
    const [colorType, setColorType] = useState("hex");
    // Handler Functions
    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }
    const generateRandomHEXColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    const generateRandomRGBColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`RGB(${r}, ${g}, ${b})`);
    }
    // UseEffect
    useEffect(() => {
        const body = document.body;
        body.style.backgroundColor = color;
    },[color])
    
    return (
        <>
            <div className="">
                {/* Buttons */}
                <div className="mt-10 flex flex-row justify-center mb-60">
                    <button onClick={() => setColorType("hex")}
                            className="bg-stone-900 text-white p-4 rounded mr-4">Create HEX Color
                    </button>
                    <button onClick={() => setColorType("rgb")}
                            className="bg-stone-900 text-white p-4 rounded mr-4">Create RGB Color
                    </button>
                    <button onClick={colorType === "hex" ? generateRandomHEXColor : generateRandomRGBColor}
                            className="bg-stone-900 text-white p-4 rounded mr-4">Generate Random Color
                    </button>
                </div>
                {/* Colour Type */}
                <div className="flex flex-col items-center mb-60">
                    <h1 className="text-6xl">
                        {
                            colorType === "hex" ?
                                "HEX Color"
                                :
                                "RGB Color"
                        }
                    </h1>
                </div>
                {/* Colour Code */}
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl">
                        {color}
                    </h2>
                </div>
                <div className="flex items-center flex-col mt-6">
                    <span className="text-red-800">Project - 2 (Random Color Generator)</span>
                </div>
            </div>
        </>
    );
}

export default RandomColourGenerator;