
function ChildComponent3(props) {
    return (
        <>
            <div className="p-40">
                <button className="bg-amber-300 p-4" onClick={props.showMessage}>Click Me</button>
            </div>
        </>
    );
}

export default ChildComponent3;