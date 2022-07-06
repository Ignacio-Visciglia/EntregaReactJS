import './NavBar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const categories = ['Tumblers', 'Face masks', 'T-Shirts', 'Leggings', 'Hoodies', 'Tank Tops', 'Bottles', 'Mugs', 'Neck Gaiters' ];

    return (   
        <AppBar className='appBar' position="static">
            <Toolbar className="navbar">
                <div className='container-logo'>
                    <Link to='/'>
                        <img src="/logoDroid9SouthAmerica.png" alt="Logo" />
                    </Link>
                </div>
                <div className='itemsNavBar'>
                    <ul className='list'>
                        <li className='home'>
                            <Button variant='text'>
                                <Link className='link' to='/'> Home</Link>
                            </Button>
                        </li>
                        <li className='products'>
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
                    </ul>
                    <Button>
                        <CartWidget/>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;