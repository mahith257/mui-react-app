import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
        <Box position="fixed">
            <Typography variant="h6" fontWeight={200}  mt={3} mb={3}>Online</Typography>
            <AvatarGroup max={4} sx={{ display:"flex", justifyContent: "start" }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography variant="h6" fontWeight={200} mt={3} mb={3}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5} sx={{paddingRight: 2}}>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt=""/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt=""/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt=""/>
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" />
                </ImageListItem>
            </ImageList>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: 5 }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Box>
    </Box>
  );
}
