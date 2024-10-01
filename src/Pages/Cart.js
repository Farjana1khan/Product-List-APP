import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { IoArrowBack } from "react-icons/io5";
import {   BsCartX } from 'react-icons/bs';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return (
        <Container className="py-4">
         
            <Row className="justify-content-center">
                {!isEmpty ? (
                  <>
                  <h1 className="text-dark mt-5 text-center py-5">Product Cart</h1>
                    <Table responsive="sm striped bordered hover variant dark" className="mb-5">
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                            justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    
                    <Container className='container-sm'>
                          <Row>
                           <Col className="py-2">
                                <h4>Total Price: Rs. {cartTotal}</h4>
                            </Col>
                            <Col className="p-0" md={4} style={{
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"right"
                            }}>
                                <Button variant="danger" className="m-2" onClick={() => emptyCart()}>
                                    <BsCartX size="1.7rem" />
                                    Clear Cart
                                </Button>
                                <Button variant="success" className="m-2" onClick={() => navigate('/home')}>
                                <IoArrowBack size="1.3rem" />
                                   Back To Home
                                </Button>
                             
                            </Col>
                           </Row>
                          </Container>
                  </>
                ) : (
                    <div className="text-center mt-5">
                        <h3 className=''>Your cart is empty.</h3>
                        <div>
                            <Link to='/home'>Back To Home</Link>
                        </div>
                    </div>

                )}

               
                   
            </Row>
        </Container>
    );
};

export default Cart;
