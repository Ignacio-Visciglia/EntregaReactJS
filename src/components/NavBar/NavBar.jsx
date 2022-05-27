import './NavBar.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (   
        <AppBar position="static">
            <Toolbar className="navbar">
                <div className='container-logo'>
                    <img src="./logoDroid9SouthAmerica.png" alt="Logo" />
                </div>
                <ul>
                    <li>
                        <Button variant='text'>Clothing</Button>
                    </li>
                    <li>
                        <Button>Accessories</Button>
                    </li>
                </ul>
                <Button color="inherit">Login</Button>
                <Button>
                    <CartWidget/>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;