import React from 'react';
import Products from '../components/Products';

const Home = () => {
  console.log(process.env.NODE_ENV);
  return <Products />;
};

export default Home;
