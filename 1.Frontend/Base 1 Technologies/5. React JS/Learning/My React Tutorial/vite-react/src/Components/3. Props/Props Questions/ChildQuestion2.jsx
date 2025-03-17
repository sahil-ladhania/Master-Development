
function ChildQuestion2(props) {
    return (
        <>
            <div>
                <h1 className="text-red-800">
                    {props.greetingMsg}{props.name}
                </h1>
            </div>
        </>
    );
}

ChildQuestion2.defaultProps = {
    name : "Sahil Ladhania"
}

export default ChildQuestion2;