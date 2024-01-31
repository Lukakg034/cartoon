import { createContext, useState, useEffect } from "react";

const MovieDataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [episodeDescription, setEpisodeDescription] = useState([]);
  const [episodeNumber, setEpisodeNumber] = useState([]);
  // const [episodeLength, setEpisodeLength] = useState([]);
  const [tvShowEpisodes, setTvShowEpisodes] = useState([]);
  const [episodeYear, setEpisodeYear] = useState([]);

  // const [videoThumbnail, setVideoThumbnail] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

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
      const episodeNumbers = [];
      const tvShowDescription = [];
      const tvShowYear = [];
      const tvShowEpisodes = [];
      // const show = {};
      data.forEach((dataEntry) => {
        dataEntry.episodes.forEach((show) => {
          titlesArray.push(show.episodeTitle);
          episodeNumbers.push(show.episode);
          tvShowDescription.push(show.description);
          tvShowYear.push(show.year);
          tvShowEpisodes.push(show.videoUrl);
        });
      });
      setTitleList(titlesArray);
      setEpisodeNumber(episodeNumbers);
      setEpisodeDescription(tvShowDescription);
      setEpisodeYear(tvShowYear);
      setTvShowEpisodes(tvShowEpisodes);
    }
  }, [data]);

  const contextValue = {
    data,
    titleList,
    allEpisodes,
    videoUrl,
    episodeNumber,
    episodeDescription,
    episodeYear,
    tvShowEpisodes,
  };
  // console.log(tvShowEpisodes);
  //   console.log(data);
  //   console.log(episodeNumber);
  //   console.log(episodeDescription);
  //   console.log(videoUrl);
  //   console.log(titleList);
  //   console.log(allEpisodes);
  return (
    <MovieDataContext.Provider value={contextValue}>
      {children}
    </MovieDataContext.Provider>
  );
};

export default MovieDataContext;
