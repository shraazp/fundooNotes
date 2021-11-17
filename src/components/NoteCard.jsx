
import {Grid, Card, CardContent, Typography,Button,CardActions } from "@mui/material";
import React from "react";
import '../css/notes.css'
import { useSelector } from "react-redux";
const Note = () => {
  const notes = useSelector((state) => state.allNotes.searchNotes);
  return (
    (notes.length>0)?
            (
      <Grid container spacing={4}>
        {notes.map((item) => {
          return (<Grid item xs={12} sm={6} md={3} key={item._id}>
              <Card className="notesCard">
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                <CardActions>
        <Button size="small">Edit notes</Button>
      </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid> ):(<span>No matching results.</span>)
  );
};

export default Note;
