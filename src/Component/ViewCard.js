import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ViewCard({singleData}) {
  const [data, setData] = useState([])
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

  useEffect(() => {
       setData(singleData)
  }, [singleData])
  console.log(data);


  return (
    <div>
         {data.map((item) => (
                <Box sx={style} key={item.u_id}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {item.fname}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {item.lname} 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {item.age}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {item.phone} 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {item.email} 
                    </Typography>
                </Box>
            ))}
    </div>
  )
}

export default ViewCard

