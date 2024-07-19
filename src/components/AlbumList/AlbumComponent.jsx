import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import AlbumCard from '../Card/AlbumCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AlbumComponent = ({ data, title, idx }) => {
  const [showAll, setShowAll] = useState(true);
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
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '3vh',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: idx !== 1 ? '1px solid var(--color-primary)' : 'none',
          marginTop: '10px'
        }}>
        <Typography sx={{ color: 'var(--color-white)', fontFamily: 'var(--font)', paddingLeft: 1 }}>
          {title}
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
    </>
  );
};

AlbumComponent.propTypes = {
  title: PropTypes.string.isRequired,
  idx: PropTypes.number,
  data: PropTypes.arrayOf(Object).isRequired
};

export default AlbumComponent;
