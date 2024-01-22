import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import ViewCard from './ViewCard';
import Card from './Card';


export default function Model({ open, selectUser, handleClose, data }) {
    const [singleData, setSingleData] = useState([])

    console.log(selectUser, 7);
    console.log(data);


    const fdata = data.filter((i) => i.u_id === selectUser);

    useEffect(() => {

        setSingleData(fdata);
    }, [selectUser])
    console.log(singleData);




    return (
        <div>
            {/* <Button onClick={handleOpen}>View</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            
              <Card
                singleData={singleData}
              />
            </Modal>
        </div>
    );
}
