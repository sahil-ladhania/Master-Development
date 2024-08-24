import ChildQuestion5 from "./ChildQuestion5.jsx";

function ParentQuestion5() {
    const welcome = () => {
        alert("Hello World!");
    }
    return (
        <>
            <div>
                <ChildQuestion5 welcome={welcome}/>
            </div>
        </>
    );
}

export default ParentQuestion5;