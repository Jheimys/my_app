import { useState, useEffect } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toasty from '../../componentes/Toasty';
import { useParams } from 'react-router-dom';

const Edit = () => {

    const {id} = useParams()

    const [form, setForm] = useState({
        name:{
            value:'',
            error:false,
        },

        job:{
             value:'',
            error:false,
        },
    })

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                const {data} = response.data
                
                setForm({
                    name:{
                        value:data.first_name,
                        error:false,
                    },
            
                    job:{
                         value:data.job,
                        error:false,
                    },
                })
               
            })
    },)

   

    const [openToasty, setOpenToasty] = useState(false)

   
    const handleInputChange = (e) => {
        const {name, value} = e.target 

        setForm({
            ...form,
            [name]: {
                value,
            }
        })

    }

    const handleRegisterButton = () => {
        
        let hasError = false

        let newFormState = {
            ...form,
        }

        if(!form.name.value){
            hasError = true
          
          newFormState.name = {
            value:form.name.value,
            error: true,
            helperText:'Digite o nome'
          }
         
          
        }

        if(!form.job.value){
            hasError = true
            
            newFormState.job = {
                value:form.job.value,
                error: true,
                helperText:'Digite o Cargo'
            }
          
        }

        if(hasError) {
            return setForm(newFormState)
        }

        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setOpenToasty(true)
        })

     
    }
   
    return(
        <>  
            <Stack direction="column" spacing={3}>

                <TextField
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    id="outlined-basic" 
                    label="Digite o seu nome" 
                    variant="outlined"
                    name="name"
                    value={form.name.value}
                    onChange={handleInputChange} 
                />

                <TextField 
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    id="outlined-basic" 
                    label="Digite o seu Cargo" 
                    variant="outlined"
                    name='job'
                    value={form.job.value}
                    onChange={handleInputChange}
                />

                <Button 
                    sx={{width:'150px'}} 
                    variant="contained" 
                    onClick={handleRegisterButton}>
                        Salvar
                </Button>
        
                <Toasty 
                    open={openToasty} 
                    severity='success' 
                    text='Registro realizado com sucesso!'
                    onClose={() => setOpenToasty(false)} />
            </Stack>


        </>
    )
}

export default Edit