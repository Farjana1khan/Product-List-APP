import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiCart, BiSearch } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";

const Header = () => {
    const { isEmpty, totalItems } = useCart();

    return (
        <Navbar collapseOnSelect expand="md bg-light shadow-md"
            style={{ width: '100%', position: 'fixed', zIndex: 100, boxShadow: " black 0px 0px 5px 0px" }}>
            <Container>
                <Navbar.Brand className="navbar-brand d-flex mr-auto text-uppercase">
                    <Link className="nav-link active" to="/home">
                        <h1> <span className="logo">Shop</span>Lane</h1>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item ">
                            <Link className="nav-link active" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Clothing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Accessories
                            </Link>
                        </li>
                    </ul>

                    <Nav className="ms-auto">
                        <Link to="/" className='text-dark d-flex align-items-center'>
                            <BiSearch size="2rem" />
                        </Link>

                        <Link to="/cart" className='text-dark d-flex align-items-center'>
                            <BiCart size="2rem" />
                            {!isEmpty && <span style={{ position: 'relative', left: '-8px', top: '-18px', backgroundColor: "deepskyblue", padding: " 2px 9px", borderRadius: "100%", color: "white", textDecoration: "none" }}>{totalItems}</span>}
                        </Link>

                        <Link to="/" className='nav-link text-dark'>
                            <VscAccount size="1.8rem" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
