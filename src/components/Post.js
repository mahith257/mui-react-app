import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Paella from '../assets/paella.jpg'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";

export default function Post() {
  return (
    <div>
        <Card sx={{marginTop: "10px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    M
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="July 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={Paella}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  );
}
