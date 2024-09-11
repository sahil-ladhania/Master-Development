import {CartState} from "../context/Context.jsx";

const SingleProduct = ({ prod }) => {
    const {
        state : { cart },
        dispatch
    } = CartState();
    
    // Handler Functions
    const handleAdd = () => {
        dispatch({
            type : 'ADD_TO_CART',
            payload : prod,
        })
    }
    const handleRemove = () => {
        dispatch({
            type : 'REMOVE_FROM_CART',
            payload : prod,
        })
    }

    return (
        <div key={prod.id} className="border border-gray-200 rounded-lg shadow-lg p-4 m-2 max-w-sm bg-white">
            <img className="h-40 w-full object-cover rounded-t-lg" src={prod.image} alt={prod.name} />
            <div className="mt-4">
                <p className="text-xl font-semibold text-gray-800">{prod.name}</p>
                <p className="text-lg text-gray-600">{prod.price} Rs</p>
                <p className="text-sm text-gray-500">{prod.ratings} Ratings</p>
                <p className="text-sm text-gray-500">{prod.inStock} Left</p>
            </div>
            {
                cart.some(p => p.id === prod.id) ?
                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleRemove}
                            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                            Remove
                        </button>
                    </div>
                    :
                    <div className="mt-4 flex gap-2">
                        <button
                            onClick={handleAdd}
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Add
                        </button>
                    </div>
            }
        </div>
    );
};

export default SingleProduct;