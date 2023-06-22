import { Box, Grid, Stack } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {
  
  
  return (
    <Box>
      <Header />
      <Box  >
        <Grid container  width={'100%'}>
          <Grid item xs={12} md={4}
          sx={{margin:{xs:'0 0 10px 0',md:'0'}}}
          >
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
}

export default App;
