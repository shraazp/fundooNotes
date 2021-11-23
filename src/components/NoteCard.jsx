import {
    Grid,
    Card,
    Typography,
    Button,
} from "@mui/material";
import React from "react";
import '../css/notes.css'
import {useSelector} from "react-redux";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import {update} from "../service/noteRetrieve";
import {useDispatch} from "react-redux";
import {updateNote} from "../actions/notesActions";

const Note = ({value}) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [noteId, setNoteId] = React.useState("")
    const dispatch = useDispatch();
    const data = {
        title: title,
        content: content,
        isTrash:false
    };
    const handleClickOpen = (item) => {
        setTitle(item.title);
        setContent(item.content);
        setNoteId(item._id)
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleUpdate = () => {
        update(data, noteId).then((res) => {
            dispatch(updateNote(res))
        }).catch((err) => console.log(err.message));
        handleClose()
    }
    
    const handleDelete=(item)=>{
        const dataDelete = {
            title: item.title,
            content: item.content,
            isTrash:true
        };
        update(dataDelete, item._id).then((res) => {
            dispatch(updateNote(res))
        }).catch((err) => console.log(err.message));
    }
    const notes = useSelector((state) => state.allNotes.searchNotes);
    return((notes.length > 0) ? (
        <div>
           

            <Grid container
                spacing={4}>
                {
                notes.map((item) => {
                    if (item.isTrash === false) {
                        return (
                            <Grid item
                                xs={4}
                                key={
                                    item._id
                            }>
                                <Card className="notesCard"
                                   >
                                    <Typography variant="h5" onClick={
                                        () => {
                                            handleClickOpen(item)
                                        }
                                }>
                                        {
                                        item.title
                                    }</Typography>
                                    <Typography sx={
                                            {mb: 1.5}
                                        }
                                        color="text.secondary" onClick={
                                            () => {
                                                handleClickOpen(item)
                                            }
                                    }>
                                        {
                                        item.content
                                    } </Typography>
                                    <DeleteIcon onClick={()=>{handleDelete(item)}}/>
                                </Card>
                            </Grid>
                        );
                    }
                })
            } </Grid>
            <div>
                <Dialog fullWidth maxWidth="sm"
                    open={open}
                    onClose={handleClose}
                    hideBackdrop
                >
                    <DialogContent>
                        <input className="title" type="text"
                            value={title}
                            onChange={
                                e => setTitle(e.target.value)
                            }
                            name="title"
                            placeholder="Title"/>
                        <textarea className="text-area"
                            value={content}
                            onChange={
                                e => setContent(e.target.value)
                            }
                            name="content"
                            placeholder="Take a note..."/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>close</Button>
                        <Button onClick={handleUpdate}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    ) : (
        <span>No matching results.</span>
    ));
};
export default Note;
