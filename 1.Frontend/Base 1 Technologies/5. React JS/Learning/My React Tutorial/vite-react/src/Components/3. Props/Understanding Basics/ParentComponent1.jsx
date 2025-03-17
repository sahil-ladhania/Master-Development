import ChildComponent1 from "./ChildComponent1.jsx";

function ParentComponent1() {
    const message = "Hello From ParentComponent1 !";
    return (
        <>
            <div>
                <ChildComponent1 msg={message}/>
            </div>
        </>
    );
}

export default ParentComponent1;