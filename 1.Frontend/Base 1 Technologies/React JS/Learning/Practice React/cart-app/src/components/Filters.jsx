import { Button, Form } from "react-bootstrap";
import Rating from "./Rating.jsx";
import {CartState} from "../context/Context.jsx";

const Filters = () => {
    const {
        productState : {byStock , byFastDelivery , searchQuery , sort} , productDispatch
    } = CartState();
    console.log(productDispatch);
    console.log(byStock , byFastDelivery , searchQuery , sort);

    return (
        <div className="p-4 bg-white shadow-md rounded-md w-64">
            <span className="block text-xl font-semibold mb-4">Filter Products</span>
            <Form.Check
                inline
                label="Ascending"
                name="sortOrder"
                type="radio"
                id="ascending"
                onChange={() => productDispatch({
                    type : 'SORT_BY_PRICE',
                    payload : "lowToHigh"
                })}
                checked={sort === "lowToHigh" ? true : false}
            />
            <Form.Check
                inline
                label="Descending"
                name="sortOrder"
                type="radio"
                id="descending"
                onChange={() => productDispatch({
                    type : 'SORT_BY_PRICE',
                    payload : "highToLow"
                })}
                checked={sort === "highToLow" ? true : false}
            />
            <Form.Check
                inline
                label="Include Out of Stock"
                name="stockAvailability"
                type="checkbox"
                id="includeOutOfStock"
                onChange={() => productDispatch({
                    type : 'FILTER_BY_STOCK',
                })}
                checked={byStock}
            />
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="delivery"
                type="checkbox"
                id="fastDelivery"
                onChange={() => productDispatch({
                    type : 'FILTER_BY_DELIVERY',
                })}
                checked={byFastDelivery}
            />
            <div className="mt-4 flex items-center">
                <label className="mr-2">Rating: </label>
                <Rating/>
            </div>
            <Button
                onClick={() => productDispatch({ type : 'CLEAR_FILTERS' })}
                variant="light"
                className="mt-4"
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default Filters;