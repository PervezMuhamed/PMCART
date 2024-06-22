 import React, { useContext, useEffect } from 'react';
import { authContext } from '../../App';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Avatar, Menu, AppBar, IconButton, Toolbar, Typography, Stack, Button, Container, Box, MenuItem, Tooltip } from '@mui/material';

const Header:React.FC = () => {

  const pages = ['AboutUs', "Careers", "Technology"]
  const settings = ['Dashboard', "Logout"]
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const {dispatch}:any = useContext(authContext);
  // const {isAuthenticated} = state;
  // const navigate = useNavigate();

  useEffect(()=>{
    
  },[dispatch])

  return (
    <>
      <AppBar position="static">
        <Container maxWidth='xl'>
          <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6"  component="a" href="/"
              sx={{
               mr: 2,
               display: { xs: 'none', md: 'flex' },
               fontFamily: 'monospace',
               fontWeight: 900,
               letterSpacing: '.3rem',
               color: 'inherit',
               textDecoration: 'none',
              }}> LOGO 
            </Typography>
            <Box sx={{ flexGrow:1, display:{xs:'flex', md:'none'},}}>
              <IconButton size='large' aria-label="account of current user"
                aria-controls="menu-appbar"  onClick={handleOpenNavMenu}
                 aria-haspopup="true" color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav}
                anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                sx={{display: { xs: 'block', md: 'none' },}}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography variant="h5" noWrap component="a"  href=""
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>


      {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img width="150px" alt='JVLcart Logo' src="/images/logo.png" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="mynavbar">
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <Search/>
          </div>
          <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
            { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                  <figure className='avatar avatar-nav'>
                    <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                  </figure>
                  <span>{user.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                  <Dropdown.Item onClick={() => {navigate('/myProfile')}} className='text-dark'>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
                  {/* <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item> */}
                {/* </Dropdown.Menu>
              </Dropdown>
            )
            :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
            }
            <Link to="/cart"><span id="cart" className="ml-3">Cart</span></Link>
          </div>
        </div>  
      </nav> */}
    </>
  )
}

export default Header;