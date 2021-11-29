import React, {useEffect} from "react";
import Appbar from "../components/AppBar";
import NoteCard from '../components/NoteCard';
import SideBar from "../components/SideBar";
import {noteRetrieve} from '../service/noteRetrieve'
import {Redirect} from "react-router-dom"
import {useDispatch} from "react-redux";
import {setNotes} from "../actions/notesActions";
import CreateNote from "../components/createNote";
import DeleteNote from "../components/DeleteNote";
import { styled, useTheme } from '@mui/material/styles';
import {Box} from "@mui/material";
const Dashboard = () => {
    const dispatch = useDispatch();
    let [path,setPath]=React.useState("")
    useEffect(() => {
        // eslint-disable-next-line
        fetchitem();// eslint-disable-next-line
    }, []);
    const fetchitem = () => {

        noteRetrieve().then((res) => {
            
            dispatch(setNotes(res.data));
        }).catch((err) => {
            console.log(err); <Redirect to="login"/>
        });
    };
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Fundoo notes");
    
    const handleDrawer = () => {
        (open) ? setOpen(false) : setOpen(true)
    };
    const handleClick = (title) => {
        setTitle(title)
    }
    const drawerWidth = 240;
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }),
      );
   
    return (<Main open={open}>

 <Box  sx={{ p: 4, marginLeft: 28,}}>
        <Appbar handleDrawerOpen={handleDrawer}
            title={title}/>
        <SideBar open={open}
            setOpen={setOpen}
            handleClick={handleClick}
            path={path}
            setPath={setPath}/>
           

        {(path==="trash")?(<DeleteNote/>):( <div><CreateNote/>
        <div className="note-cards">
            <NoteCard />
        </div></div>)}
       
        </Box>

    </Main>)
}
export default Dashboard
