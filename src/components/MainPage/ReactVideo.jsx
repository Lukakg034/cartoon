import { useContext } from "react";
import MovieDataContext from "../../contexts/context";

export const VideoPlayer1 = () => {
  const { tvShowEpisodes } = useContext(MovieDataContext);
  return (
    <>
      <iframe
        width="640"
        height="360"
        frameBorder="0"
        src="https://mega.nz/embed/dAhzHIBS#fBDqMDcsw-eDAyIWT6pWDG13I-VpxJ5OIWEfG8rmf-Y"
        allowfullscreen
      ></iframe>
    </>
  );
};
