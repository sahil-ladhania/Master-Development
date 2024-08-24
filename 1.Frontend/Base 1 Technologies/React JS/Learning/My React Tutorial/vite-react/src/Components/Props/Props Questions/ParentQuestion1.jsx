import ChildQuestion1 from "./ChildQuestion1.jsx";

function ParentQuestion1() {
    const name = "Sahil Ladhania";
    return (
        <>
            <ChildQuestion1 name={name}/>
        </>
    );
}

export default ParentQuestion1;