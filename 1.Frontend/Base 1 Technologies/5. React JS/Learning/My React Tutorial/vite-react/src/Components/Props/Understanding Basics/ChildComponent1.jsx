import PropTypes from "prop-types";

function ChildComponent1(props) {
    return (
        <>
            <div className="p-40">
                <h1>
                    {props.msg}
                </h1>
            </div>
        </>
    );
}

ChildComponent1.defaultProps = {
    msg : "Default Message !"
}
ChildComponent1.propTypes = {
    msg : PropTypes.string
}

export default ChildComponent1;