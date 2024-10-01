

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { Link } from "@reach/router";

const ProductCard = (props) => {
    let { image, price, title, id } = props.data;
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data);
    }

    return (
        <Card
            style={{ width: '14rem', height: 'auto' }}
            className='text-dark text-left p-0 overflow-hidden shadow mx-auto mb-4 card-view product-card'
        >
            <Link to={`/product-details/${id}`}>
                <div className="card-image-container">
                    <div style={{ width: '6rem' }}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: "14px", fontFamily: "sans-serif" }}>
                    {title}
                </Card.Title>

                <Card.Title style={{ color: "deepskyblue" }}>
                    Rs. <span className="h5">{price}</span>
                </Card.Title>
                <Button
                    style={{ backgroundColor: "#198754" }}
                    onClick={() => addToCart()}
                    className='text-white d-flex align-item-center m-auto border-0'
                >
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
