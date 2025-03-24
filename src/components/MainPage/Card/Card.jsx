// import MovieDataContext from "../../../contexts/context";
// import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader, Grid } from "@mui/material";
import "./Card.css";
export default function ActionAreaCard({ episodes }) {
  // const {
  //   titleList,
  //   episodeNumber,
  //   episodeDescription,
  //   episodeYear,
  //   tvShowEpisodes,
  // } = useContext(MovieDataContext);
  // console.log(episodes);
  // console.log(
  //   episodes.map((episode, index) => {
  //     console.log(episode, index);
  //   })
  // );
  return (
    <Grid item container spacing={1}>
      {/* {titleList.map((title, index) => ( */}
      {episodes.map((episode, index) => (
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
          key={index}
          height={460}
          overflow={"hidden"}
        >
          <Card
            sx={{
              maxWidth: 780,
            }}
            key={index}
            className="card"
          >
            <CardHeader
              title={`${episode.episodeTitle}`}
              subheader={`${episode.year}, Ep. ${episode.episode}`}
            />
            <CardActionArea>
              <CardMedia>
                <iframe
                  width="640"
                  height="360"
                  frameBorder="0"
                  src={episode.videoUrl}
                  allowFullScreen
                ></iframe>
              </CardMedia>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={22}
                >
                  {/* {episodeDescription[index]} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
