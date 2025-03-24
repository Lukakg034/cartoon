import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import db from "../db.json";

const CartoonCards = () => {
  return (
    <Grid container spacing={4}>
      {db.map((cartoon) => (
        <Grid item key={cartoon.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={cartoon.generalThumbnail}
              alt={cartoon.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cartoon.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cartoon.episodes.length} Episodes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CartoonCards;
