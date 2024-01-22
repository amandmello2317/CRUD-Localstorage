import React, { useEffect, useState } from 'react';

import { Box, Button, Card, FormControl, Input, TextField, Typography } from '@mui/material'

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


export default function UpdateCard({selectUser, data, setOpen1, open1}) {
    const [index, setIndex] = useState()
    const [updateData, setupdateData] = useState(selectUser)

    useEffect(() => {
        const Index = (data.findIndex((e) => e.u_id === selectUser.u_id))
        setIndex(Index)
    }, [])


    const handleChange = (e) => {
        setupdateData({
            ...updateData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async() => {
        const updateData1 = [...data]
         updateData1.splice(index, 1, updateData)
        localStorage.setItem("User", JSON.stringify(updateData1))
        await setOpen1(false)
    }
  return (

    <Box sx={style}>

    <Card sx={{ maxWidth: 345 }}>

   
    <div style={{margin: "10px auto 0 auto", width:"200px"}}>
            <Typography variant='h5'>Update form</Typography>

            <FormControl  defaultValue="" required>
                <TextField
                    type='text'
                    name='fname'
                    onChange={handleChange}
                    placeholder='First Name'
                    label='firstName'
                    value={updateData.fname}
                />
                <TextField
                    type='text'
                    name='lname'
                    onChange={handleChange}
                    placeholder='Last Name'
                    label='Last Name'
                    value={updateData.lname}

                />
                <TextField
                    type='text'
                    name='age'
                    onChange={handleChange}
                    placeholder='age '
                    label='age'
                    value={updateData.age}

                />
                <TextField
                    type='text'
                    name='email'
                    onChange={handleChange}
                    placeholder='Email'
                    label='Email'
                    value={updateData.email}
                    InputLableProps={{shrink:true}}

                />
                <TextField
                    type='text'
                    name='phone'
                    onChange={handleChange}
                    placeholder='Phone'
                    label='Phone'
                    value={updateData.phone}

                />
                
                <Button onClick={handleSubmit}>Submit</Button>
                <Button>Cancle</Button>

            </FormControl>

        </div>
        </Card>
    </Box>

  )
}
