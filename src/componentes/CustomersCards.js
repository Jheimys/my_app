import * as React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


import { red } from '@mui/material/colors';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModalConfirm from './ModalConfirm';


const CustomersCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    onRemoveCustomer,
    onEditCustomers
}) => {

    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(!openModal)
    }

    const handelComfirm = id => {
        onRemoveCustomer(id)
    }

    const handleRemoveCustomer = () => {
        handleToggleModal()
    }

    const handleEditCustomers = id => {
        onEditCustomers(id)
    }

  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
                        R
                    </Avatar>
                }

                title={`${name} ${lastname}`}
                subheader={email}
            />
            
            <CardActions disableSpacing>
                
                <IconButton aria-label="editar cadastro" onClick={() => handleEditCustomers(id)}>
                    <EditRoundedIcon />
                </IconButton>

                <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer} >
                    <DeleteForeverRoundedIcon/>
                </IconButton>
            </CardActions>
        </Card>

        <ModalConfirm
            open={openModal}
            onClose={handleToggleModal}
            onConfirm={() => handelComfirm(id)} 
            title='Deseja realmente cancelar esse cadastro?'
            message='Ao confirmar não será possível reverter essa operação.'
        />
    </>
  )
}

export default CustomersCard