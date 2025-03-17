import ParentQuestion1 from "./ParentQuestion1.jsx";
import ParentQuestion2 from "./ParentQuestion2.jsx";
import ParentQuestion3 from "./ParentQuestion3.jsx";
import ParentQuestion4 from "./ParentQuestion4.jsx";
import ParentQuestion5 from "./ParentQuestion5.jsx";

function PropsQuestions() {
    return (
        <>
            <div className="p-20">
                <h1>Props Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Create a parent component that passes a name as a prop to a child component, which then displays a greeting message using that name.
                    </h2>
                    <ParentQuestion1/>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Create a component that displays a greeting message with a default name if no name prop is provided.
                    </h2>
                    <ParentQuestion2/>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Create a parent component that passes an array of items as a prop to a child component, which renders them in an unordered list.
                    </h2>
                    <ParentQuestion3/>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Create a component that displays a special offer message if a prop isSpecial is true, and a regular message if it’s false.
                    </h2>
                    <ParentQuestion4/>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Create a parent component that passes a function as a prop to a child component. The child component should call the function when a button is clicked.
                    </h2>
                    <ParentQuestion5/>
                </div>
            </div>
        </>
    );
}

export default PropsQuestions;