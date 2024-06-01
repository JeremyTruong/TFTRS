import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const pages = ['Products', 'Pricing', 'Blog', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorElNav: null,
            anchorElUser: null
        }
    }

    handleOpenNavMenu = (event) => {
        this.setState({anchorElNav: event.currentTarget})
      };

    handleOpenUserMenu = (event) => {
        this.setState({anchorElUser: event.currentTarget})
      };
    
    handleCloseNavMenu = () => {
        this.setState({anchorElNav: null})
      };
    
    handleCloseUserMenu = () => {
        this.setState({anchorElUser: null})
      };

    render() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(this.state.anchorElNav)}
              onClose={this.handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={this.handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={this.state.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorElUser)}
              onClose={this.handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
        )
    };
}

export default Header;