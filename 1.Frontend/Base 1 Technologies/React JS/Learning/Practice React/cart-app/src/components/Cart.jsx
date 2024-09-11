import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context.jsx";
import {useEffect, useState} from "react";

function Cart() {
    // State Variables
    const [total, setTotal] = useState(0);
    const {
        state: { cart },
        dispatch
    } = CartState();

    // Calling useEffect
    useEffect(() => {
        setTotal(
            cart.reduce((accumulator , current) => accumulator + Number(current.price) , 0)
        )
    }, [cart]);

    return (
        <>
            <div className="home">
                <Row>
                    <Col md={8}>
                        <div className="productContainer">
                            <ListGroup>
                                {cart.map((item) => (
                                    <ListGroup.Item key={item.id}>
                                        <Row className="align-items-center">
                                            <Col md={2}>
                                                <img className="h-40 w-40" src={item.image} alt={item.name} />
                                            </Col>
                                            <Col md={4}>
                                                <h5>{item.name}</h5>
                                            </Col>
                                            <Col md={2}>
                                                <h6>{item.price} Rs</h6>
                                            </Col>
                                            <Col md={2}>
                                                <h6>Qty: {item.qty}</h6>
                                            </Col>
                                            <Col md={2}>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        dispatch({
                                                            type: 'REMOVE_FROM_CART',
                                                            payload: item,
                                                        })
                                                    }
                                                >
                                                    Remove
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="checkoutContainer p-3 shadow-lg bg-white rounded">
                            <h2>{cart.length} Items</h2>
                            <h5>Total Price: {total} Rs</h5>
                            <Button
                                type="button"
                                className="w-full mt-4"
                                variant="success"
                            >
                                {
                                    cart.length > 0 ?
                                        "Proceed To Checkout"
                                        :
                                        "Add Items To Cart"
                                }
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Cart;