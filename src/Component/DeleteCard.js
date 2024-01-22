import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function DeleteCard({ open2, selectUser, data, setOpen2 }) {
   
    const handleCancle = () => {
        setOpen2(false)
    }


    const DeleteElement = async(id) => {
            console.log(id);
            const updatedData = data.filter((e) => e.u_id !== id)
            console.log(updatedData);
            localStorage.setItem("User", JSON.stringify(updatedData))
            await setOpen2(false)
    }

    return (
        <div>
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you Sure to delete
                </Typography>
                <Box>
                    <button onClick={() => DeleteElement(selectUser)}>Delete</button>
                </Box>
                <button onClick={handleCancle}>cancle</button>
            </Box>
        </div>
    )
}
