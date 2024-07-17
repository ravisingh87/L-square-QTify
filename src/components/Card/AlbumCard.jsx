import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Chip } from '@mui/material';

const AlbumCard = ({ data }) => {
  console.log('Albumcard data', data);
  return (
    <Card
      sx={{
        width: 159,
        height: 240,
        backgroundColor: 'black',
        borderRadius: '10px',
        marginRight: '10px'
      }}
      key={data.id}>
      <CardActionArea
        sx={{
          backgroundColor: '#ffffff',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        }}>
        <CardMedia component="img" height="140" image={data.image} alt="album" />
        <CardContent sx={{ padding: '10px' }}>
          <Chip label={`${data.follows} Follows`} variant="outlined" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
          gutterBottom
          variant="text"
          component="div"
          sx={{ marginBottom: 0, color: 'white', fontSize: 14 }}>
          {data.title}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default AlbumCard;
