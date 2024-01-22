import React from 'react'
import Modal from '@mui/material/Modal';
import DeleteCard from './DeleteCard';

export default function DeleteModel({ open2,selectUser,handleClose,data,setOpen2 }) {
 
  return (
    <div>
         <Modal
                open={open2}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DeleteCard 
                   data={data}
                   selectUser={selectUser}
                   setOpen2={setOpen2}
                   open2={open2}
                />

            </Modal>

    </div>
  )
}
