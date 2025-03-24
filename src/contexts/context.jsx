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
  const [dataLoaded, setDataLoaded] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData); // setting data from the json array for search results in navigation
        setDataLoaded(true); // setting loaded state to false once it finishes loading
        setVideoUrl(jsonData[0].episodes[0].videoURL);

        setAllEpisodes(
          jsonData.flatMap((entry) => {
            return entry.episodes;
          })
        );
      } catch (error) {
        console.log("Fetch error", error);
        setDataLoaded(false);
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
    // console.log(data.titleList);
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
    dataLoaded,
  };
  // console.log(
  //   data.length > 0 ? data[0].episodes.length : "Data is not ready yet"
  // );

  return (
    <MovieDataContext.Provider value={contextValue}>
      {children}
    </MovieDataContext.Provider>
  );
};

export default MovieDataContext;
