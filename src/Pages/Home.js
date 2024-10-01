import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter products  categorized men's clothing and women's clothing
  const menWomenClothing = productData.filter(item => item.category === "men's clothing" || item.category === "women's clothing").slice(0, 5)

  // Filter jewelry items
  const jewelryItems = productData.filter(item => item.category === "jewelery");

  return (
    <>
      <Header />
      <Container className="py-4">
        {/* Clothing for Men and Women */}
        <Row style={{ marginTop:"8rem"}}>
        <h2 className=" font-weight-bold  small mb-3">
            Clothing For Men and Women
          </h2>
          {menWomenClothing.map(item => (
            <Col key={item.id} sm={6} md={4} lg={3} xl={2} className='mx-3'>
              <ProductCard data={item} />
            </Col>
          ))}
        </Row>

        {/* Jewelry */}
        <Row className="my-4">
        <h2 className=" font-weight-bold   small mb-3">
            Accessories For Men and Women
          </h2>

          {jewelryItems.map(item => (
            <Col key={item.id} sm={6} md={4} lg={3} xl={2}  className='mx-3'>
              <ProductCard data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
