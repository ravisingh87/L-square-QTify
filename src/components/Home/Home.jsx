import React, { useEffect, useState } from 'react';
import './Home.css';
import AlbumCard from '../Card/AlbumCard';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const fetchData = async () => {
    const res = await axios('https://qtify-backend-labs.crio.do/albums/top');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container className="grid-container">
      <Box sx={{ width: '100%', height: '3vh', display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ color: 'var(--color-white)', fontFamily: 'var(--font)', paddingLeft: 1 }}>
          Top Albums
        </Typography>
        <Typography
          onClick={() => setShowAll(!showAll)}
          sx={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font)',
            paddingRight: 1,
            cursor: 'pointer'
          }}>
          {showAll ? 'Show all' : 'Collapse'}
        </Typography>
      </Box>
      {showAll ? (
        <Slider {...settings} className="slider">
          {data?.map((item) => (
            <Grid
              item
              xs={6}
              md={12}
              sx={{ heigth: '60vh', display: 'flex', flexDirection: 'row' }}
              key={item.id}>
              <AlbumCard data={item} />
            </Grid>
          ))}
        </Slider>
      ) : (
        <Grid
          className="grid_j"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 3 }}
          sx={{ marginTop: '5px' }}>
          {data?.map((item) => (
            <Grid
              className="grid_h"
              item
              xs={6}
              md={3}
              sx={{
                heigth: '41vh',
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '13% !important'
              }}
              key={item.id}>
              <AlbumCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
