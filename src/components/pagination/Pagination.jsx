import { Pagination } from "@mui/material";
import "./pagination.css";
import { useContext, useEffect, useState } from "react";
import MovieDataContext from "../../contexts/context";

const episodesPerPage = 12;

export default function AppPagination() {
  const { data, dataLoaded } = useContext(MovieDataContext);
  const [currentPage, setCurrentPage] = useState(1);

  //Calculate the total number of pages
  //! Conditional rendering while checking if the data is populated with list of episodes
  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0 || !data[0]?.episodes) {
    return <div>No data available</div>;
  }

  const totalEpisodes = data[0].episodes.length;
  const numberOfPages = Math.ceil(totalEpisodes / episodesPerPage);

  // Get the episodes for the current page
  const startIndex = (currentPage - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const currentEpisodes = data[0].episodes.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="paginationContainer">
      <Pagination
        page={currentPage}
        onChange={handlePageChange}
        color="secondary"
        count={numberOfPages}
      />
      <div className="episodeList">
        {currentEpisodes.map((episode, index) => (
          <div key={index} className="episodeItem">
            <h3>{episode.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
