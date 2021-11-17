import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({ 
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar(props) {
 
  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  // const handleDrawerClose = () => {
  //   props.setOpen(false);
  // };
  const menuItems = [
    { 
      text: 'Notes', 
      icon: <LightbulbOutlinedIcon/>, 
      path: '/' 
    },
    { 
      text: 'Remainders', 
      icon: < NotificationsNoneOutlinedIcon />, 
      path: '/create' 
    },
    { 
      text: 'Edit labels', 
      icon: <CreateOutlinedIcon />, 
      path: '/create' 
    },
    { 
      text: 'Archieve', 
      icon: < ArchiveOutlinedIcon/>, 
      path: '/login' 
    },
    { 
      text: 'Trash', 
      icon: <DeleteIcon />, 
      path: '/create' 
    },
  ];

    return (
        <Box sx={
            {display: 'flex'}
        }>
           
      <Drawer variant="permanent" open={props.open}>
        <DrawerHeader/>
       
       
       
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              
              //className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon onMouseOver={handleDrawerOpen}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
   </Box>
    )
}
