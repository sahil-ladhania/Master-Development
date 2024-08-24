import ChildQuestion4 from "./ChildQuestion4.jsx";

function ParentQuestion4() {
    const specialOfferMsg = "Dicount of 50%...";
    return (
        <>
            <div>
                <ChildQuestion4 specialOfferMsg={specialOfferMsg}/>
            </div>
        </>
    );
}

export default ParentQuestion4;