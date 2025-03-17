import ChildComponent3 from "./ChildComponent3.jsx";

function ParentComponent3() {
    const showMessage = () => {
        alert("Button Clicked in ChildComponent !");
    }
    return (
        <>
            <div>
                <ChildComponent3 showMessage={showMessage}/>
            </div>
        </>
    );
}

export default ParentComponent3;