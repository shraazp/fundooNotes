import  React,{ useState, useEffect }  from 'react';
import '../css/appbar.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Logo from '../assets/keep.png'
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {TextField,
InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectedNote,listView } from "../actions/notesActions";
import {removeUserSession} from "../utils/Common"
import {Redirect } from 'react-router-dom'
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  }));
  




export default function Appbar(props) {

  const [search, setSearch] = useState("");
  const  [signOut,setSignOut]=React.useState(false)
 
 
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.allNotes.notes);
  const list = useSelector((state) => state.allNotes.listView);
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };
 useEffect(() => {
    dispatch(
      selectedNote(
      notes.filter((item) => {
          return (item.title.toLowerCase().includes(search.toLowerCase())||(item.content.toLowerCase().includes(search.toLowerCase())));
        })
      )
    )
    // eslint-disable-next-line
   },[search,notes]);
   const handleView = () => {
    dispatch(listView());
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  


  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

 
  const handleMenuClose = () => {
    setAnchorEl(null);
   
  };
  
  function refreshPage() {
    window.location.reload(false);
  }
  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=>{removeUserSession();setSignOut(true)}}>
        <ListItemIcon><LogoutIcon/></ListItemIcon>
      <ListItemText>Sign Out</ListItemText>
      </MenuItem>
    </Menu>
  );

 
 
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed"style={{ background: "#ffffff" }}>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{
              padding: '12px',
               color: "#4d4c4c" 
            }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="FundooNotes" src={Logo} variant="square" style={{ margin:"0px,0px,4px",padding:"0px,6px,0px,0px"}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            &nbsp;
            <span   style={{color:"black",padding:"0px,30px,0px,0px"}}>{props.title}</span>
          </Typography>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
          placeholder="Search…"
          style={{ width: "50%",padding:"0px,10px,0px,0px"}}
          variant="outlined"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { height: "44px",padding:"0px,10px,0px,0px" },
          }}
        />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
             
                <RefreshIcon onClick={refreshPage}sx={{ color: "#4d4c4c" }} />
             
            </IconButton>
            {!list ? (
               <IconButton size="large" color="inherit">
          <SplitscreenOutlinedIcon
            fontSize="medium"
            onClick={handleView}
            style={{ marginLeft: "15px", color: "#4d4c4c"}}
          /> 
          </IconButton>
        ) : ( <IconButton size="large" color="inherit">
          <GridViewIcon
            fontSize="medium"
            onClick={handleView}
            style={{ marginLeft: "15px",color: "#4d4c4c" }}
          /> 
          </IconButton>
        )}
            <IconButton size="large" color="inherit">
            
                <SettingsSharpIcon sx={{ color: "#4d4c4c" }} />
              
            </IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ fontSize: 40, color: "#4d4c4c" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar> 
      {renderMenu}
      {signOut?<Redirect to="/"/>:null}
      
   </Box>
    
  );
}