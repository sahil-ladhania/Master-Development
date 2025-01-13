import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom";
import {CartState} from "../context/Context.jsx";

function Header() {
    const {
        state : { cart },
        dispatch,
        productDispatch
    } = CartState();

    return (
        // Navbar
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link className="text-yellow-500 no-underline" to="/" >Amazon</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        type="text"
                        placeholder="Search Products"
                        className="m-auto"
                        onChange={(e) => productDispatch({
                            type : 'FILTER_BY_SEARCH',
                            payload : e.target.value
                        })}
                    />
                </Navbar.Text>
                <Nav className="ml-auto flex items-center">
                    <Dropdown align="end">
                        <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            className="flex items-center bg-transparent border-0 text-white"
                            style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center' }}
                        >
                            <FaShoppingCart className="text-white" fontSize="25px" />
                            <Badge bg="secondary" className="ml-2">
                                {cart.length}
                            </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {
                                cart.length > 0 ?
                                    <>
                                        {/*  Render Cart Items  */}
                                        {
                                            cart.map((item) => (
                                                <div key={item.id} className="dropdown-item flex justify-between items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="h-10 w-10 object-cover rounded-md"
                                                    />
                                                    <div className="flex-grow mx-2">
                                                        <p className="text-sm">{item.name}</p>
                                                        <p className="text-xs text-gray-500">{item.price} Rs</p>
                                                    </div>
                                                    <button onClick={() => dispatch({ type : 'REMOVE_FROM_CART', payload : item })}
                                                        className="bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))
                                        }
                                        <Link to="/cart">
                                            <button className="bg-blue-500 w-full text-white py-2 rounded-md hover:bg-blue-600">
                                                Go To Cart
                                            </button>
                                        </Link>
                                    </>
                                    :
                                    <span style={{padding: 10}}>
                                        Cart is Empty!
                                    </span>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;