import { ExpandLess, ExpandLessOutlined, ExpandMore, ExpandMoreOutlined, LocationOnRounded, Phone } from "@mui/icons-material"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, Typography } from "@mui/material"
import { useState } from "react"


const PlaceDetials = ({ place }) => {

    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card elevation={6}>

            <CardMedia
                component="img"

                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://st3.depositphotos.com/1037238/13709/v/450/depositphotos_137092050-stock-illustration-fast-food-restaurant.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>

                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography component="legend">Rating</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>


            </CardContent>
            <CardActions disableSpacing>

                {expanded ? (
                    <ExpandLess
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show less"
                    />
                ) : (
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                    </ExpandMore>
                )}

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    {place?.awards?.map((award) => (
                        <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                            <img src={award.images.small} />
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                    ))}



                    <Box flexWrap={'wrap'} gap={'10px'}>
                        {place?.cuisine?.map(({ name }) => (
                            <Chip sx={{ margin: '5px' }} key={name} size="small" label={name}   />
                        ))}
                    </Box>

                    {place.address && (
                        <Box margin={'25px 0 5px 0'} display={'flex'} justifyContent={'space-between'}>
                            <LocationOnRounded sx={{ color: 'grey' }} />
                            <Typography gutterBottom variant="body2" color="textSecondary"  >{place.address}</Typography>
                        </Box>
                    )}
                    
                    {place.phone && (
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Phone sx={{ color: 'grey' }} />
                            <Typography gutterBottom variant="body2" color="textSecondary"  >{place.phone}</Typography>
                        </Box>
                    )}
                    

                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    tripadvisor.com
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </Collapse>
        </Card>

    )
}

export default PlaceDetials