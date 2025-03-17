import {useState} from "react";

function ChildQuestion4(props) {
    const [isSpecial, setIsSpecial] = useState(true);
    return (
        <>
            <div className="text-red-800">
                {
                    isSpecial ? props.specialOfferMsg : "No Discount !!!"
                }
            </div>
        </>
    );
}

export default ChildQuestion4;