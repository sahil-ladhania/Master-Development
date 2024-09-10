import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom";

function Header() {
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
                                {0}
                            </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>
                                Cart is Empty!
                            </span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;