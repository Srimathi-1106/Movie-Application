import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function TopBar({mode,setMode}) {
    const navigate = useNavigate();
    
    return (
        <AppBar position="static">
            <Toolbar className="nav" style={{ justifyContent: 'space-between' }}> 
                <div style={{ float:'left'}}>
                    <h1 className="title">Movie App</h1>
                </div>
                <div className='button-group' >
                    <IconButton onClick={()=> setMode(mode==="light"?"dark":"light")}>
                        {mode==="light"?<DarkModeIcon color="tertiary"/>:<LightModeIcon color="tertiary"/>}
                    </IconButton>
                    <Button className='button' style={{border:'none'}} variant="text" color="inherit" onClick={() => navigate("/portal/home")}>Home</Button>
                    <Button className='button' style={{border:'none'}} variant="text" color="inherit" onClick={()=>navigate("/portal/movielist")}>Movies</Button>
                    <Button className='button' style={{border:'none'}} variant="text" color="inherit" onClick={() => navigate("/portal/addmovie")}>Add Movies</Button>
                    <Button className='button' style={{border:'none'}} variant="text" color="inherit" onClick={() => navigate("/login")}>Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
