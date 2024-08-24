
function ChildComponent2(props) {
    return (
        <>
            <div className="p-40">
                <span>Number : {props.number}</span>
                <br/>
                <span>UserName : {props.user.name} , UserAge : {props.user.age}</span>
                <br/>
                <span>Hobbies :- </span>
                <ul>
                    {
                        props.hobbies.map((hobbie, index) => (
                            <li key={index}>{hobbie}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default ChildComponent2;