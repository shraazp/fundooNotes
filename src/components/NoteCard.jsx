
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import '../css/notes.css'
const Note = ({ notes }) => {
  return (
    <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      <Grid container spacing={4}>
        {notes.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <Card className="notesCard">
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Note;
