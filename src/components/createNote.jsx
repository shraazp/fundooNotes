import React, { useState } from "react";
import {create} from '../service/noteRetrieve'

import { useDispatch } from "react-redux";
import { addNewNote } from "../actions/notesActions";
import { Paper, InputBase, Button, Grid } from "@mui/material";
const CreateNote = () => {
    const [titleFieldVisible, setTitleFieldVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const showTitleField = () => {
        setTitleFieldVisible(true)
    }
    const hideTitleField = () => {
        setTitleFieldVisible(false)
    }
    const dispatch = useDispatch();

    const data = {
        title: title,
        content: content
    };
    const handleSubmit = e => {
        e.preventDefault()
        create(data).then((res)=>{ if (res.data.status === 200) {
            dispatch(addNewNote(res.data.message))
          } else {
            console.log(res);
          }}).catch((err) => console.log(err.message));
        setTitle("");
        setContent("");
        hideTitleField();
    }
    return (
      <div className="create-notes">
        <Paper className="add-note-container" elevation={5}>
          <InputBase
            type="text"
            placeholder={titleFieldVisible ? "Title" : "Take a note..."}
            fullWidth
            value={title}
            inputProps={{
              style: { height: "36px" },
            }}
            onFocus={() => showTitleField()}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleFieldVisible && (
            <Grid container>
              <Grid item xs={12}>
                <InputBase
                  type="text"
                  placeholder="Take a note..."
                  fullWidth
                  value={content}
                  multiline={true}
                  inputProps={{
                    style: { height: "36px" },
                  }}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} align="right">
                <Button
                  style={{ color: "black", textTransform: "none" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  style={{ color: "black", textTransform: "none" }}
                  onClick={hideTitleField}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          )}
        </Paper></div>
      );
}
export default CreateNote