import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Box } from "@mui/system";
import { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function AddPost() {
    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems: "center",
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px"
    })
    return (
        <>
            <Tooltip title="Add" sx={{position: "fixed", bottom: "20px", left: {xs: "calc(50% - 25px)", md: "30px"} }} onClick={(e) => {setOpen(true)}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400} height={300} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Add a New Post</Typography>
                    <UserBox>
                        <Avatar src="" sx={{width: 30, height: 30}} />
                        <Typography fontWeight={500} variant="span">Mahith</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Whats on your mind?"
                        variant="standard"
                        sx={{width: "100%"}}
                    />
                    <Stack direction="row" gap={1} mt={2} mb={4}>
                        <EmojiEmotionsIcon color="primary" />
                        <ImageIcon color="secondary" />
                        <VideoCameraBackIcon color="success" />
                        <PersonAddIcon color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>POST</Button>
                        <Button sx={{width: "100px"}}><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}
