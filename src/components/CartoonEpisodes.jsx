import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const CartoonEpisodes = ({ cartoon, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  const episodesPerPage = 9;

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
    setCurrentEpisodeIndex(0);
  };

  const handleEnded = () => {
    if (currentEpisodeIndex < currentEpisodes.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    } else if (
      currentPage < Math.ceil(cartoon.episodes.length / episodesPerPage)
    ) {
      setCurrentPage(currentPage + 1);
      setCurrentEpisodeIndex(0);
    }
  };

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = cartoon.episodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  return (
    <div>
      <Button variant="contained" onClick={onBack}>
        Back to Cartoons
      </Button>
      <Grid container spacing={4}>
        {currentEpisodes.map((episode, index) => (
          <Grid item key={episode.episode} xs={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {episode.episodeTitle}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {episode.description}
                </Typography> */}
                <iframe
                  width="100%"
                  height="315"
                  src={episode.videoUrl}
                  title={episode.episodeTitle}
                  frameborder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(cartoon.episodes.length / episodesPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
      />
    </div>
  );
};

export default CartoonEpisodes;
