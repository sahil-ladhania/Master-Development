import data from "./data.js";
import { CiCirclePlus } from "react-icons/ci";
import {useState} from "react";

function Accordion() {
    // State Variables
    const [selected, setSelected] = useState(null);
    const [isMultiSelectionActive, setIsMultiSelectionActive] = useState(false);
    const [multiple, setMultiple] = useState([]);
    // Handler Functions
    const handleAccordionToggle = (getAccordionId) => {
        if (isMultiSelectionActive) {
            if (multiple.includes(getAccordionId)) {
                setMultiple(multiple.filter(id => id !== getAccordionId));
            }
            else {
                setMultiple([...multiple, getAccordionId]);
            }
        }
        else {
            setSelected(getAccordionId === selected ? null : getAccordionId);
        }
    };
    const handleMultiSelection = () => {
        setIsMultiSelectionActive(!isMultiSelectionActive);
        setSelected(null);
        setMultiple([]);
    };

    return (
        <>
            <div className="p-20">
                {/* Button For Multi Selection */}
                <div className="flex items-center flex-col mb-10">
                    <button onClick={handleMultiSelection} className="bg-blue-300 p-4 rounded">
                        {isMultiSelectionActive ? "Disable Multi Selection" : "Enable Multi Selection"}
                    </button>
                </div>
                {/* Accordions */}
                <div className="flex flex-col items-center">
                    {
                        data.map((accordion) => (
                            <div onClick={() => handleAccordionToggle(accordion.id)} key={accordion.id} className="mb-4 bg-blue-100 rounded cursor-pointer h-auto w-7/12 p-4 flex flex-col justify-evenly">
                                <div className="flex items-center justify-between mb-2">
                                    <h1 className="text-md font-medium">{accordion.question}</h1>
                                    <CiCirclePlus className="text-xl"/>
                                </div>
                                {
                                    (isMultiSelectionActive ? multiple.includes(accordion.id) : selected === accordion.id)
                                    &&
                                    <p className="text-md text-justify">{accordion.answer}</p>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-center flex-col mt-4">
                    <span className="text-red-800">Project - 1 (Accordion)</span>
                </div>
            </div>
        </>
    );
}

export default Accordion;