import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';


export default function Sidebar({mode, setMode}) {

    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#home">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#pages">
                            <ListItemIcon>
                                <PagesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#groups">
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#marketplace">
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#friends">
                            <ListItemIcon>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#settings">
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#profile">
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component = "a" href="#">
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}
