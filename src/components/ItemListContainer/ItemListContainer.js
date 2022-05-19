import CardItem from '../CardItem/CardItem'
import { Grid } from '@mui/material'

const ItemListContainer = ({greeting}) => {
    return (
      <>
        <h2>{greeting}</h2>
        <Grid container>
          <Grid item md={3}>
            <CardItem title="Producto 1" price={1500} image={"1D9SA-ACCESORIES-StainlessTumbler.jpeg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title="Producto 2" price={500} image={"2D9SA-ACCESORIES-ClothFaceMask.jpeg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title="Producto 3" price={2000} image={"3D9SA-CLOTHES-Women'sBoyfriendTee.jpeg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title="Producto 4" price={2000} image={"4D9SA-CLOTHES-KidsPremiumTee.jpeg"}/>
          </Grid>
        </Grid>
      </>
       
    );
};

export default ItemListContainer;