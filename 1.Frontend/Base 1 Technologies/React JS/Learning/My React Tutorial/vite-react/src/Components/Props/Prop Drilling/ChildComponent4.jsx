import GrandChildComponent4 from "./GrandChildComponent4.jsx";

function ChildComponent4(props) {
    return (
        <>
            <div>
                <GrandChildComponent4 message={props.message} />
            </div>
        </>
    );
}

export default ChildComponent4;