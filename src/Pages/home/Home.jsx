import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
import axios from 'axios';

const Home = () => {
  const [category, setCategory] = useState('All');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://food-del-backend-t63h.onrender.com';
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} data={data} />
      <AppDownload />
    </div>  
  );
};

export default Home;
