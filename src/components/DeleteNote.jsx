import {
    Grid,
    Card,
    Typography,
    Button,
    IconButton
} from "@mui/material";
import React from "react";
import '../css/delete.css'
import {useSelector} from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import {useDispatch} from "react-redux";
import {updateNote, deleteNote} from "../actions/notesActions";
import {update, Delete} from "../service/noteRetrieve";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from "@material-ui/icons/Close";
const DeleteNote = () => {
    const [hover, setHover] = React.useState([]);
    const [open,setOpen] = React.useState(false)
    const [itemRemoved,setItemRemoved]=React.useState("")
    const dispatch = useDispatch();
    const handleRestore = (item) => {
        const data = {
            title: item.title,
            content: item.content,
            isTrash: false,
            color:item.color
        };
        update(data, item._id).then((res) => {
            dispatch(updateNote(res))
            setOpen(true)
        }).catch((err) => console.log(err.message));
    }
    const handleDelete = (item) => {
        Delete(item._id).then((res) => {
            dispatch(deleteNote(item._id))
           
        }).catch((err) => {
            console.log(err)
        })
    }
    const handleToClose = (event, reason) => {
        if ("clickaway" == reason) return;
        setOpen(false);
      };
    const notes = useSelector((state) => state.allNotes.searchNotes);
    const listView = useSelector((state) => state.allNotes.listView);
    const emptyTrash = () => {
        notes.map((item) => {
            if (item.isTrash === true) {
                handleDelete(item)
            }
        })
    }
    const undoRestore=(itemRemoved)=>{
        const dataRestore = {
            title: itemRemoved.title,
            content: itemRemoved.content,
            isTrash: true,
            color:itemRemoved.color
        };
        update(dataRestore, itemRemoved._id).then((res) => {
            dispatch(updateNote(res))
            setOpen(true)
        }).catch((err) => console.log(err.message));
    }
    return (
        <div className="trash">
           
            <div className="trash-text-out">
                <div className="trash-text">
                    <span>Notes in trash are deleted after 7 days</span>
                    <Button className="trash-button"variant="text"
                        onClick={
                            () => {
                                emptyTrash()
                            }
                    }>Empty trash</Button>
                </div>
            </div>
            <div className="trash-content">
                <Grid container
                    spacing={4} justifyContent={listView ? "center" : null}>
                    {
                    notes.map((item,index) => {
                        if (item.isTrash === true) {
                            return (
                                <Grid item
                                xs={12} md={listView ? 8 : 3}
                                    key={
                                        item._id
                                }>
                                    <Card className="notesCard" style={{background:item.color}}
                                        onMouseEnter={
                                            () => {
                                                setHover({[index]: true});
                                            }
                                        }
                                        onMouseLeave={
                                            () => {
                                                setHover({[index]: false});
                                            }
                                    }>
                                        <Typography variant="h5">
                                            {
                                            item.title
                                        }</Typography>
                                        <Typography sx={
                                                {mb: 1.5}
                                            }
                                            color="text.secondary">
                                            {
                                            item.content
                                        } </Typography>
                                       {hover[index] ? (<div className="delete-icons">
                                          <IconButton title="Delete forever" fontSize="small" onClick={
                                                () => {
                                                   handleDelete(item)
                                                }
                                            }>
                                        <DeleteForeverIcon  fontSize="small"
                                           /></IconButton>
                                           <IconButton title="Restore"fontSize="small"
                                            onClick={
                                                () => {
                                                  setItemRemoved(item)
                                                    handleRestore(item)
                                                    
                                                }
                                            }>
                                        <RestoreFromTrashIcon  fontSize="small" /></IconButton></div>):null}
                                        <Snackbar
                                            anchorOrigin={{
                                                horizontal: "right",
                                                vertical: "bottom",
                                            }}
                                            open={open}
                                            autoHideDuration={5000}
                                            message="Note restored"
                                            onClose={handleToClose}
                                            action={
                                            <div>
                                            <Button variant="text" onClick={()=>{undoRestore(itemRemoved)}}>UNDO</Button>
                                            <CloseIcon fontSize="small"  onClick={handleToClose}/></div>
                                            }
                                        />
                                    </Card>
                            </Grid>
                            );
                        }
                    })
                   
                } </Grid>
        
            </div>
              
        </div>

    );
};
export default DeleteNote;
