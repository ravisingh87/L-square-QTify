import React, { useEffect, useState } from 'react';
import './Home.css';
import AlbumCard from '../Card/AlbumCard';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios('https://qtify-backend-labs.crio.do/albums/top');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container sx={{ height: '60vh' }}>
      <Grid item xs={6} md={12} sx={{ heigth: '60vh', display: 'flex', flexDirection: 'row' }}>
        {data && data.map((item) => <AlbumCard data={item} />)}
      </Grid>
    </Grid>
  );
};

export default Home;
