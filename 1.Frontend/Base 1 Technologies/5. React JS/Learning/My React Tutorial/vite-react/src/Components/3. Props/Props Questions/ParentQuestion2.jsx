import ChildQuestion2 from "./ChildQuestion2.jsx";

function ParentQuestion2() {
    const greetingMsg = "Hello, ";
    return (
        <>
            <ChildQuestion2 greetingMsg={greetingMsg}/>
        </>
    );
}

export default ParentQuestion2;