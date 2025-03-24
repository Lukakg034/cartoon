import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActionArea,
} from "@mui/material";
import "./CartoonCard.css";
const CartoonCard = ({ cartoon, onClick }) => {
  return (
    <Grid item xs={12} sm={3} md={3} onClick={() => onClick(cartoon)}>
      <Card sx={{ height: "350px", width: "250px" }}>
        <CardActionArea>
          <CardMedia
            className="card-media"
            component="img"
            height="200"
            image={cartoon.generalThumbnail}
            alt={cartoon.label}
            sx={{ objectFit: "contain" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {cartoon.label}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              {cartoon.episodes.length} Episodes
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CartoonCard;
