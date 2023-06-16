import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom'; 

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Header = () => {

    const history = useHistory()
   
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        handleToggleMenu()
        history.push(route)
    }


    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleToggleMenu()}
                    >

                    <MenuIcon /> 

                    </IconButton>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  
                    My App
                    </Typography>

                    <Button color="inherit">Login</Button>
                    
                </Toolbar>
            </AppBar>

            <Drawer open={menuOpen} onClose={() => handleToggleMenu() }>
                <List>
                    <ListItem  >
                        <ListItemButton onClick={() => handleMenuClick('/')}>
                            <ListItemIcon>
                                <AddHomeWorkRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItemButton onClick={() => handleMenuClick('/customers')}>
                        <ListItem >
                            <ListItemIcon>
                                <PersonRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Lista de clientes</ListItemText>
                        </ListItem>
                    </ListItemButton>

                    <ListItemButton onClick={() => handleMenuClick('/customers/add')}>
                        <ListItem >
                            <ListItemIcon>
                                <PersonRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Cadastro de clientes</ListItemText>
                        </ListItem>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    )
}

export default Header