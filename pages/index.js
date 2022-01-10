import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import data from '../utils/data';
import NextLink from 'next/link';
export default function Home({ children }) {
  return (
    <div>
      <Layout>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`product/${product.slug}`}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>${product.price}</CardActions>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}
