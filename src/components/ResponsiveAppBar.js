import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { SigninComponent } from './SigninComponent';
import mLogo from '../images/mLogoLongWhiteText.svg'
import AuthContext from "../AuthContext";




const pages = ['About', 'Sign In'];
const signedInPages = ['Create New Log', 'Log History', 'Logout']

const pageToPath = {
  'About': 'about',
  'Sign In': 'signin',
  'Create New Log': 'log',
  'Log History': 'userlogs',
  'Logout': 'logout',
};


export const ResponsiveAppBar=()=> {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { token, userId, signedIn, setSignedIn, userName} = useContext(AuthContext);

  const navigate = useNavigate();

const handleMenuItemClick = (event, page) => {
  handleCloseNavMenu();
  handleNavigation(page)
}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (page) => {
    if (page === 'Logout') {
        setSignedIn(false)
        navigate('/')
      return;
    }
  
    const path = pageToPath[page] || page.toLowerCase();
    navigate("/" + path);
  };
  

  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="logo-image-container">
          <img  className="logo-appbar" src={mLogo}/>
          </div>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            {/* Actual hamburger button icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(event)=>handleMenuItemClick(event, page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* hamburger menu for mobile/small screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>
          {!signedIn ? 
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event)=>handleMenuItemClick(event, page)}
                sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'transparent'}}
              >
                {page}
              </Button>
            ))}
          </Box> : <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {signedInPages.map((page) => (
              <Button
                key={page}
                onClick={(event)=>handleMenuItemClick(event, page)}
                sx={{ my: 2, color: 'white', display: 'block', backgroundColor: 'transparent'}}
              >
                {page}
              </Button>
            ))}
          </Box>
}
          <Box sx={{ flexGrow: 0 }}>
           <Typography>{!signedIn ? <SigninComponent /> : `Welcome, ${userName}!`}</Typography> 
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
};
