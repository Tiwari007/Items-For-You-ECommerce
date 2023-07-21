import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Product({data}) {
  return (
    <Card sx={{ maxWidth: 315, margin: "20px 20px", padding: "10px" }}>
      <CardMedia
      className='product_image'
        sx={{ height: 200 }}
        image={data?.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography className='product__title'>
          {data?.title} ({data?.brand})
        </Typography>
        <Typography className='product__description' color="text.secondary">
          {data?.description}
        </Typography>
        <Chip className='product__tags' label={data?.category} color="primary" variant="outlined" />
        <Typography className='product__price' color="text.primary">
          ${data?.price}.00
        </Typography>
      </CardContent>
      <CardActions className='product__buttons'>
        <Button variant="outlined">Add To Cart</Button>
        <Button variant="outlined">Buy Now</Button>
      </CardActions>
    </Card>
  );
}