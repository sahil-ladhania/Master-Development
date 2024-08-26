import './App.css'
import Accordion from "./Components/Accordian/Accordion.jsx";
import RandomColourGenerator from "./Components/RandomColourGenerator/RandomColourGenerator.jsx";
import StarRating from "./Components/StarRating/StarRating.jsx";

function App() {
    return (
        <>
            {/*<Accordion/>*/}
            {/*<RandomColourGenerator/>*/}
            <StarRating noOfStars={5}/>
        </>
    )
}

export default App
