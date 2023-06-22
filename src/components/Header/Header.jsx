import { AirportShuttle, Search as InputSearch, Menu as MenuIcon } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, InputBase, Menu, TextField, Toolbar, Typography, alpha, styled } from "@mui/material"
import { Autocomplete } from '@react-google-maps/api'

const Header = () => {

    return (
        <AppBar position="sticky" sx={{backgroundColor:'#002984'}}>
            <StyledToolBar  >
                <Typography 
                variant="h6" 
                component="div" 
                sx={{
                    flexGrow: 1 ,
                    display:{xs:'none',md:'block'}
                }}
                >
                    Travel Guid
                </Typography>
                <AirportShuttle sx={{fontSize:'40px'}}/>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                    <Typography 
                    variant="h6" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1 ,
                        display:{xs:'none',md:'block'}
                    }}>
                        Explore new places
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <InputSearch sx={{ color: 'gray' }} />
                        </SearchIconWrapper>
                        <InputBase placeholder="search..." />
                    </Search>
                </Box>



            </StyledToolBar>
        </AppBar>
    )
}


export default Header

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex'
    , justifyContent: 'space-between'
    , backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
})) 