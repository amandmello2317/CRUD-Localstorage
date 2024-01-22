import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';

import UpdateCard from './UpdateCard';



export default function ModelUpdate({ open1, selectUser, handleClose, data, setOpen1 }) {

    console.log(selectUser, 7);
    useEffect(() => {
    }, [open1])


    return (
        <div>
            {/* <Button onClick={handleOpen}>View</Button> */}
            <Modal
                open={open1}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            
              <UpdateCard
                data={data}
                selectUser={selectUser}
                setOpen1={setOpen1}
                open1={open1}
              />
            </Modal>
        </div>
    );
  
}
