import './NavBar.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {
    return (   
        <AppBar position="static">
            <Toolbar>
                <div className='container-logo'>
                    <img src="./logoDroid9SouthAmerica.png" alt="Logo" />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Sign up</a>
                        </li>
                        <li>
                            <a href="#">Log in</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                    </ul>
                </div>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;