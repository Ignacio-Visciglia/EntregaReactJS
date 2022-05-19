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
                        <Button variant='text'>Gallery</Button>
                    </li>
                    <li>
                        <Button>Sign up</Button>
                    </li>
                    <li>
                        <Button>Log in</Button>
                    </li>
                    <li>
                        <Button>Shop</Button>
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