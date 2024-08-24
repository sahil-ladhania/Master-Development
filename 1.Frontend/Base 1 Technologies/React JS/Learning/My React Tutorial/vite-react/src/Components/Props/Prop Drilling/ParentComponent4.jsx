import ChildComponent4 from "./ChildComponent4.jsx";

function ParentComponent4() {
    const message = "Hello From ParentComponent4 !";
    return (
        <>
            <div>
                <ChildComponent4 message={message}/>
            </div>
        </>
    );
}

export default ParentComponent4;