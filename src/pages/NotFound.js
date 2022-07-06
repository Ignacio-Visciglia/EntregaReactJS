import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <>
            <h1>404 - Error</h1>
            <Button className='btn-custom'>
                <Link to='/'>Check out our products</Link>
            </Button>
        </>
    )
}

export default NotFound;