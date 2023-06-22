import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography, styled } from "@mui/material"
import { useState } from "react"
import PlaceDetials from "../PlaceDetails/PlaceDetials"

const List = () => {

    const [type, setType] = useState('Restaurents')
    const [rating, setRating] = useState('')
    const places = [
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },
        { name: 'lost agellosla' },

    ]

    return (
        <Box  
            sx={{
                padding: {sm:'0',md:'10px',},
                display: 'flex', flexDirection: 'column', gap: '30px' 
            }}
        >
            <Box sx={{margin:{xs:'10px 0',md:0}}} >
                <Typography variant="h5">Restaurants, Hotels & Attreactions around you</Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>

                    {/* selectro */}
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={type}
                            onChange={(e) => { setType(e.target.value) }}
                            label="Age"
                        >
                            <MenuItem value='Restaurents'>Restaurents</MenuItem>
                            <MenuItem value='Hottels'>Hottels</MenuItem>
                            <MenuItem value='Attractoions'>Attractoions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={rating}
                            onChange={(e) => { setRating(e.target.value) }}
                            label="Age"
                        >
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>



                </Box>
            </Box>

            <StyledGrid container spacing={3}    >
                {places?.map((place) => {
                    return (<Grid item xs={12}>
                        <PlaceDetials place={place} />
                    </Grid>)

                })}
            </StyledGrid>

        </Box>
    )
}


export default List

const StyledGrid = styled(Grid)({
    overflowY: 'auto',
    height: '63vh',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
      },
})