import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Slider from 'react-slick';
import axios from 'axios';
import AlbumCard from '../Card/AlbumCard';
import './SongsAlbum.css';

const SongsAlbum = () => {
  const [showAll, setShowAll] = useState(true);
  const [value, setValue] = useState('All');
  const [data, setData] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [genreSongs, setGenreSongs] = useState([]);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newData = data.filter((item) => item.genre.label === newValue);
    setGenreSongs(newData);
  };

  const fetchData = async () => {
    const resTop = await axios('https://qtify-backend-labs.crio.do/songs');
    setData(resTop.data);
  };
  const fetchTabs = async () => {
    const res = await axios('https://qtify-backend-labs.crio.do/genres');
    setTabs(res.data.data);
  };

  useEffect(() => {
    fetchData();
    fetchTabs();
  }, []);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '3vh',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--color-primary)',
          marginTop: '10px'
        }}>
        <Typography
          sx={{
            color: 'var(--color-white)',
            fontFamily: 'var(--font)',
            paddingLeft: 1
          }}>
          Songs
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
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                sx: {
                  backgroundColor: 'var(--color-primary)'
                }
              }}>
              <Tab
                label="All"
                value="All"
                sx={{
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font)'
                }}
              />
              {tabs.map((item) => (
                <Tab
                  key={item.key}
                  label={item.label}
                  value={item.label}
                  sx={{
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font)'
                  }}
                />
              ))}
            </TabList>
          </Box>
        </TabContext>
      </Box>
      {showAll ? (
        <Slider {...settings} className="slider">
          {value === 'All'
            ? data?.map((item) => (
                <Grid
                  item
                  xs={6}
                  md={12}
                  sx={{ heigth: '60vh', display: 'flex', flexDirection: 'row' }}
                  key={item.id}>
                  <AlbumCard data={item} />
                </Grid>
              ))
            : genreSongs.map((item) => (
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
          {value === 'All'
            ? data?.map((item) => (
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
              ))
            : genreSongs.map((item) => (
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

export default SongsAlbum;
