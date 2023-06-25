import { Box, Grid, Stack, Typography } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaces } from './api/api';
import { useEffect, useState } from 'react';
function App() {
  
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({se:null,ne:null});
  
  const [places, setPlaces] = useState([]);
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: { latitude, longitude } })=>{
      setCoords({lat:latitude,lng:longitude})
    })
  },[])

  useEffect(() => {
console.log('useeffect called');
    // getPlaces(bounds.se, bounds.ne).then(res => {
    //   setPlaces(res)
    //   console.log('from app', res);
    // })

  }, [coords,bounds])
  console.log('places',places);
  
  return (
    <Box>
      <Header />
      <Box  >
        <Grid container  width={'100%'}>
          <Grid item xs={12} md={4}
          sx={{margin:{xs:'0 0 10px 0',md:'0'}}}
          >
            {places && places.length<1?<Typography variant='h1' color={'black'} >Loading</Typography>:(
              <> 
            <List
            places={places}
            />
            </>
            )}
            
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
            coords={coords}
            setCoords={setCoords}
            setBounds={setBounds}
            />
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
}

export default App;
