import React from 'react'
import Grid from '@material-ui/core/Grid';
import Product from './Product'



const ProductList = ({products}) => {
  return (
    <div>
       <Grid container justify="center" spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductList