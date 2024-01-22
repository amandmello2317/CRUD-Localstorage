import { Box, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import ViewCard from './ViewCard';
import Model from './Model';
import ModelUpdate from './ModelUpdate';
import DeleteModel from './DeleteModel';
// import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export default function View() {
    const [data, setData] = useState([])
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [selectUser, setSelectUser] = useState()
    const [searchData, setSearchData] = useState('')


    useEffect(() => {
        let val = JSON.parse(localStorage.getItem("User"))
        setData(val)

        console.log(data);
    }, [open, open1, open2])

    const handleOpen = (id) => {
        setOpen(true);
        setSelectUser(id)
        console.log(id);
    };


        const handleClose = () => {
            setOpen(false);
            setOpen1(false)
        };

    const handleUpdate = (i) => {
        setOpen1(true)
        setSelectUser(i)
        console.log(i);
    }

    const handleDelete = (id) => {
        setOpen2(true)
        setSelectUser(id)
        console.log(id);
    }

    const handleSearch = (e) => {
         setSearchData(e.target.value)
    }


    const filterData = data.filter((i) => (i.fname.toLowerCase().includes(searchData.toLowerCase())))

    return (
        <div>
            {/* search Bar */}
            <Box sx={{display: "flex", alignItems:"Center"}}>
                <SearchIcon />
                <TextField 
                  type='text'
                    placeholder='Search the member'
                    variant='filled'
                    fullWidth
                    sx={{ mb: 2, mt: 2}}
                    onChange={(e) => handleSearch(e)}
                
                />
            </Box>

            <TableContainer >
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                    {/* {data ? data.map((i, index) => ( */}
                    {data ? filterData.map((i, index) => (
                        <TableRow key={index}>

                            <TableCell>{i.u_id}</TableCell>
                            <TableCell>{i.fname}</TableCell>
                            <TableCell> {i.lname}</TableCell>
                            <TableCell> {i.age}</TableCell>
                            <TableCell> {i.email}</TableCell>
                            <TableCell> {i.phone}</TableCell>
                            <Button onClick={() => handleOpen(i.u_id)} >View</Button>
                            <Button onClick={() => handleUpdate(i)}>Update</Button>
                            <Button onClick={() => handleDelete(i.u_id)}>Delete</Button>
                        </TableRow>
                    )) : ""}
                </TableBody>
            </TableContainer>


            <Model
                open={open}
                selectUser={selectUser}
                handleClose={handleClose}
                data={data}
            />

            <ModelUpdate
                selectUser={selectUser}
                open1={open1}
                handleClose={handleClose}
                data={data}
                setOpen1={setOpen1}
            />

            <DeleteModel
                selectUser={selectUser}
                open2={open2}
                handleClose={handleClose}
                data={data}
                setOpen2={setOpen2}
            />

            <Link to="/">Go Back</Link>
        </div>
    )
}
