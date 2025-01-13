import ChildQuestion3 from "./ChildQuestion3.jsx";

function ParentQuestion3() {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
    return (
        <>
            <ChildQuestion3 items={items}/>
        </>
    );
}

export default ParentQuestion3;