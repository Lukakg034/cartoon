import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";
import {
  AppBar,
  Card,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { useEffect, useState } from "react";
// import VideoPlayer from "../../VideoPlayer";
// import VideoPlayer1 from "../../MainPage/ReactVideo";
import { VideoPlayer1, VideoPlayer2 } from "../../MainPage/ReactVideo";

const DivComponent = styled("div")({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: "#fff",
});

// const videoURL = "http://127.0.0.1:8080/001.mp4";
// const video1 =
//   "https://mega.nz/embed/4ARAGZqA#m8olMoALJv0kaN4HVjtJpPNx7fe3mD8HMRhBdQvUDBs";
export default function TestButton() {
  const [data, setData] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  // const videoURL = videoUrl;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/db.json");
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const jsonData = await response.json();
        setData(jsonData);
        setVideoUrl(jsonData[0].episodes[0].videoURL);

        setAllEpisodes(
          jsonData.flatMap((entry) => {
            return entry.episodes;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      const titlesArray = [];
      // const show = {};
      data.forEach((dataEntry) => {
        dataEntry.episodes.forEach((episode) => {
          titlesArray.push(episode.episodeTitle);
        });
        // console.log(
        //   `Tv show ${dataEntry.label} consists of ${dataEntry.episodes.length} episodes`
        // );
      });
      setEpisodeList(titlesArray);
    }
  }, [data]);
  console.log(videoUrl);
  // console.log(episodeList);
  // console.log(allEpisodes);
  // useEffect(() => {
  //   // Check if data is available before logging
  //   if (data.length > 0) {
  //     // Iterate through each entry
  //     data.forEach((entry) => {
  //       console.log(`Label: ${entry.label}`);

  //       // Iterate through each episode in the episodes array
  //       entry.episodes.forEach((episode) => {
  //         console.log(`Episode Title: ${episode.episodeTitle}`);
  //       });
  //     });
  //   }
  // }, [data]);
  const everyEpisode = [];
  allEpisodes.forEach((episode) => {
    return everyEpisode.push(episode.description);
  });
  // everyEpisode.forEach((episode) => {
  //   console.log(episode);
  // });
  // console.log(data[0].episodes[0].videoURL);

  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton>
            <MovieIcon />
          </IconButton>
          <Typography fontSize={"large"} sx={{ flexGrow: 1 }}>
            Old Skul cartoons
          </Typography>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
          <Stack direction={"row"} spacing={3}>
            <Button color="primary" variant="contained">
              <Typography fontSize={20}>Item 1</Typography>
            </Button>
            <Button color="primary" variant="contained">
              <Typography fontSize={20}>Movies</Typography>
            </Button>
            <Button color="primary" variant="contained">
              <Typography fontSize={20}>Login</Typography>
            </Button>
          </Stack>

          {/* <Button color="primary" variant="contained">
            Navigation button
          </Button> */}
        </Toolbar>
      </AppBar>
      <div>
        {/* <p>{data[0].episodes[0].videoURL}</p> */}
        {/* Render your component using the fetched data */}
        {data.map((item) => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
      <div>
        <ul>
          {episodeList.map((episode, index) => {
            return (
              <li key={index}>
                {episode}
                {/* <span>
                  {everyEpisode.map((episode, index) => {
                    return <p key={index}>{episode}</p>;
                  })}
                </span> */}
              </li>
            );
          })}
        </ul>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button color="secondary">xs=8</Button>
          <Card>This is card</Card>
        </Grid>
        <Grid item xs={4}>
          <Button>xs=4</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>xs=4</Button>
        </Grid>
        <Grid item xs={8}>
          <Button>xs=8</Button>
        </Grid>
      </Grid>
      <DivComponent>
        <Button variant="text">Text</Button>
        <Button variant="contained">Some other text</Button>
        <Button
          variant="contained"
          color="secondary"
          className="btn"
          size="large"
        >
          <Typography fontSize={20} textAlign={"left"}>
            Button text
          </Typography>
        </Button>

        <Button variant="outlined" startIcon={<DeleteIcon />} size="large">
          Outlined
        </Button>
      </DivComponent>
      <div>
        <VideoPlayer2 />
      </div>
      <VideoPlayer1 />
    </>
  );
}
