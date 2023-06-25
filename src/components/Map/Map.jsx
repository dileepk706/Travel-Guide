import { Box } from "@mui/material"
import GoogleMapReact from 'google-map-react';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = ({coords,setCoords,setBounds}) => {
   

    return (

        <Box sx={{ height: '85vh', flex:3.3 ,paddingTop:'12px',paddingRight:{xs:'0',md:'10px'} }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBOgMmg-u2hrG_72xBLGb83OGPKpnmjdR4' }}
                defaultCenter={ coords }
                center={ coords }
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={e=>{
                    setCoords({lat:e.center.lat,lng:e.center.lng})
                    setBounds({se:e.marginBounds.sw,ne:e.marginBounds.ne})
                    console.log('dskhkjsdhshjsfhjksdfhgkjsdfhgkjsf',e.marginBounds.sw,e.marginBounds.ne);
                }}
                onChildClick={""}
            >
                     
            </GoogleMapReact>

        </Box>
    )
}



export default Map