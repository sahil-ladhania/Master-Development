import { Button, Form } from "react-bootstrap";
import Rating from "./Rating.jsx";

const Filters = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md w-64">
            <span className="block text-xl font-semibold mb-4">Filter Products</span>
            <Form.Check
                inline
                label="Ascending"
                name="sortOrder"
                type="radio"
                id="ascending"
            />
            <Form.Check
                inline
                label="Descending"
                name="sortOrder"
                type="radio"
                id="descending"
            />
            <Form.Check
                inline
                label="Include Out of Stock"
                name="stockAvailability"
                type="checkbox"
                id="includeOutOfStock"
            />
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="delivery"
                type="checkbox"
                id="fastDelivery"
            />
            <div className="mt-4 flex items-center">
                <label className="mr-2">Rating: </label>
                <Rating/>
            </div>
            <Button
                variant="light"
                className="mt-4"
            >
                Clear Filters
            </Button>
        </div>
    );
};

export default Filters;