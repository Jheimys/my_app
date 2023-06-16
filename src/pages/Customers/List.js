import { useEffect,  useState } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import { useHistory } from "react-router-dom"

import CustomersCard from "../../componentes/CustomersCards"


const List = () => {

    const history = useHistory()

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data
                setCustomers(data)
            })
    },[])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => console.log(response))
        
        const newCustomersStates = customers.filter( customer => customer.id !== id)
        setCustomers(newCustomersStates )
    }

    const handleEditCustomers = id => {
        history.push(`/customers/edit/${id}`)
    }

    return(
         <Grid container >
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} sx={{padding:'2px'}}   key={item.id}>
                        <CustomersCard 
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                            onEditCustomers={handleEditCustomers}
                        />
                    </Grid>
                ))
            }

        </Grid>    
    )
}

export default List