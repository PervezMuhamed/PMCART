import {Box,Button,Grid,Typography, Stack} from '@mui/material';
import React from 'react';
import "../App.css"; 


const Home:React.FC =() => {
  return ( 
    <>
    <div className="object">Hello World!</div>

      <Box>
        <Typography component="h1" variant='h3'>Hello World</Typography>
        <Grid container  my={4} rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="secondary.light" p={2}>Item1</Box>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Box bgcolor="primary.main" p={2} >item2</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" p={2}>item3</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="secondary.main" p={2}>item4</Box>
          </Grid>
        </Grid>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Labore expedita,similique amet impedit ad ullam aliquid, voluptates 
        deserunt cupiditate eveniet, corporis mollitia! Aut earum nobis 
        temporibus eaque.Accusantium, veritatis ea.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Labore expedita,similique amet impedit ad ullam aliquid, voluptates 
        deserunt cupiditate eveniet, corporis mollitia! Aut earum nobis 
        temporibus eaque.Accusantium, veritatis ea.</Typography>
        <Stack spacing={2} direction="row" >
          <Button variant="text" >Text</Button>
          <Button variant="contained"  >Text</Button>
          <Button variant="outlined" >Text</Button>      
        </Stack>
      </Box>

    </>
  )
}

export default Home;




