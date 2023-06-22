import { Box } from "@mui/material"
import GoogleMapReact from 'google-map-react';
import React from 'react';


const Map = () => {


    return (

        <Box sx={{ height: '85vh', flex:3.3 ,paddingTop:'12px',paddingRight:{xs:'0',md:'10px'} }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBOgMmg-u2hrG_72xBLGb83OGPKpnmjdR4' }}
                defaultCenter={{ lat: 0, lng: 0 }}
                center={{ lat: 0, lng: 0 }}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >

            </GoogleMapReact>

        </Box>
    )
}



export default Map