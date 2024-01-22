import { Box, Button, FormControl, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Form() {
let navigate = useNavigate()

    let initialValue;
    if(localStorage.getItem("User") === null){
        initialValue = []
    }else{
        initialValue = JSON.parse(localStorage.getItem("User"))
    }

    const [value, setValue] = useState(initialValue)
    const [user, setUser] = useState()


    const handleChange = (e) => {
      
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    console.log(user, 'user');



    const handleSubmit = async (event) => {
        event.preventDefault()


        const newUserId = value.length === 0 ? 1 : value[value.length - 1].u_id + 1
        console.log(newUserId);


        const details = {
            u_id:newUserId,
            ...user
        }
        
        
        const updateValue = [...value, details]
        console.log(updateValue);

        setValue(updateValue)


        localStorage.setItem("User", JSON.stringify(updateValue))
        navigate('/view')
        setValue({fname:''})

       
    }


   
    return (
        <div style={{margin: "10px auto 0 auto", width:"200px"}}>
            <Typography variant='h2'>Form</Typography>

            <FormControl  defaultValue="" required>
                <TextField
                    type='text'
                    name='fname'
                    onChange={handleChange}
                    placeholder='First Name'
                    label='firstName'
                />
                <TextField
                    type='text'
                    name='lname'
                    onChange={handleChange}
                    placeholder='Last Name'
                    label='Last Name'
                />
                <TextField
                    type='text'
                    name='age'
                    onChange={handleChange}
                    placeholder='age '
                    label='age'
                />
                <TextField
                    type='text'
                    name='email'
                    onChange={handleChange}
                    placeholder='Email'
                    label='Email'
                />
                <TextField
                    type='text'
                    name='phone'
                    onChange={handleChange}
                    placeholder='Phone'
                    label='Phone'
                />
                
                {user ? (<Button type='Sumit' onClick={handleSubmit}>Submit </Button>) : (<Button disabled type='Sumit' onClick={handleSubmit}>Submit </Button>)}
                
              
                <Button component={Link} to="/view">
                    View
                </Button>

            </FormControl>

        </div>
    )
}
