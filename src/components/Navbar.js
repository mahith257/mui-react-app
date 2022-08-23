import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography, Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import StreamIcon from '@mui/icons-material/Stream';
import { Mail, Notifications } from "@mui/icons-material";

export default function Navbar({ mode }) {

    const [open, setOpen] = useState(false)
    
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: mode === "light" ? "white" : "black",
        padding: "0px 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({theme}) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    const UserBox = styled(Box)(({theme}) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }))

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>Socialize</Typography>
                <StreamIcon sx={{ display: { xs: "block", sm: "none"}}} />
                <Search><InputBase placeholder="Search" /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error"> 
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error"> 
                        <Notifications />
                    </Badge>
                    <Avatar src="" onClick = {(e) => setOpen(true)} sx={{ cursor: "pointer"}} />
                </Icons>
                <UserBox>
                    <Typography variant="span">Mahith</Typography>
                    <Avatar src="" onClick = {(e) => setOpen(true)} sx={{ cursor: "pointer"}} />
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}
