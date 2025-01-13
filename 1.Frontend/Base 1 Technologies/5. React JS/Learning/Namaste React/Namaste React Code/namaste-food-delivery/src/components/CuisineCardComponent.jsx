
function CuisineCardComponent(props) {
    return (
        <div className="h-40 w-28 flex flex-col items-center">
            <img className="h-20 w-20 object-cover" src="https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" alt="Cuisine" />
            <span className="mt-4">{props.cuisine.description}</span>
        </div>
    );
}

export default CuisineCardComponent;