import { Box, Typography } from "@mui/material"


const PlaceDetials = ({ place }) => {

    return (
        <Box sx={{ backgroundColor: 'red' }}>
            <Typography variant="h1">{place.name}</Typography>
        </Box>

    )
}

export default PlaceDetials