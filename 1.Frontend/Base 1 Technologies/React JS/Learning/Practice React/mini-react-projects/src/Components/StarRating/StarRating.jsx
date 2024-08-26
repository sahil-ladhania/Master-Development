import { FaStar } from "react-icons/fa";
import {useState} from "react";

function StarRating(props) {
    const totalStars = props.noOfStars;
    // State Variables
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    // Handler Functions
    const handleRate = (index) => {
        setRating(index);
    }
    const  handleStarEnter = (index) => {
        setHover(index);
    }
    const handleStarLeave = () => {
        setHover(rating);
    }

    return (
        <>
            <div className="p-20 h-16 flex justify-center cursor-pointer">
                {
                    [...Array(totalStars)].map((_ , index) => {
                        index = index + 1;
                        return <FaStar
                            key={index}
                            onClick={() => handleRate(index)}
                            onMouseEnter={() => handleStarEnter(index)}
                            onMouseLeave={handleStarLeave}
                            className={`text-6xl mx-2 
                            ${
                                index <= (hover || rating) ? "text-yellow-500" : "text-stone-900"
                            }`}
                        />
                    })
                }
            </div>
            <div className="flex items-center flex-col mt-6">
                <span className="text-red-800">Project - 3 (Star Rating)</span>
            </div>
        </>
    );
}

export default StarRating;