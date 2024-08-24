import ChildComponent2 from "./ChildComponent2.jsx";

function ParentComponent2() {
    const number = 42;
    const user = {
        name : "Sahil Ladhania",
        age : 23
    }
    const hobbies = ["Reading" , "Gaming" , "Coding"];
    return (
        <>
            <ChildComponent2 number={number} user={user} hobbies={hobbies} />
        </>
    );
}

export default ParentComponent2;