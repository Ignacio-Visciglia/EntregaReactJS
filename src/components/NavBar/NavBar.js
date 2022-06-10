import './NavBar.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { ThemeContext } from '../../context/ThemeContext';

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = ['Clothing', 'Bazaar'];

    return (   
        <AppBar position="static" className={darkTheme ? 'darkMode' : 'lightMode'}>
            <Toolbar className="navbar">
                <div className='container-logo'>
                    <Link to='/'>
                        <img src="/logoDroid9SouthAmerica.png" alt="Logo" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Button variant='text'>
                            <Link to='/'> Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Products
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categories.map( (cat, index) => {
                                return <MenuItem key={index} onClick={handleClose}><Link to={`/category/${cat}`}>{cat}</Link></MenuItem>
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button>
                            <Link to='*'>NotFound</Link>
                        </Button>
                    </li>
                    <li>
                        <ThemeSwitch/>
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