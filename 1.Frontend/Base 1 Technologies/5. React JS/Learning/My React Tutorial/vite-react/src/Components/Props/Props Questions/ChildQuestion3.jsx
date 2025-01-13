
function ChildQuestion3(props) {
    return (
        <>
            <div>
                <ul>
                    {
                        props.items.map((item , index) => (
                            <li className="text-red-800" key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default ChildQuestion3;