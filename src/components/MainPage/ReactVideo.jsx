// import { useContext } from "react";
// import MovieDataContext from "../../contexts/context";
import ReactPlayer from "react-player";
export const VideoPlayer1 = () => {
  // const { tvShowEpisodes } = useContext(MovieDataContext);
  return (
    <>
      {/* <iframe
        width="640"
        height="360"
        frameBorder="0"
        src="https://streamtape.com/e/D4dOYOp2Q2Ukr1q/002_Tom_%26_Jerry_The_Midnight_Snack_%5B1941%5D.avi.mp4"
        allowfullscreen="true"
      ></iframe> */}
      {/* <iframe
        src="https://watchadsontape.com/e/DzvyadQvPQck7V8/004_Tom_%26_Jerry_-_Fraidy_Cat_%5B1942%5D.avi.mp4"
        width="800"
        height="600"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        scrolling="no"
        frameborder="0"
      ></iframe> */}

      {/* <iframe
        src="https://watchadsontape.com/e/DzvyadQvPQck7V8/004_Tom_%26_Jerry_-_Fraidy_Cat_%5B1942%5D.avi.mp4"
        width="800"
        height="600"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        scrolling="no"
        frameborder="0"
      ></iframe> */}

      <ReactPlayer
        width={600}
        height={300}
        controls={true}
        light={
          <img
            width={600}
            height={300}
            src="https://wallpapers.com/images/featured-full/tom-and-jerry-2f5fbl2k3wwi31aq.jpg"
          />
        }
        playing={true}
        volume={0.1}
        url="https://watchadsontape.com/get_video?id=DzvyadQvPQck7V8&expires=1742760477&ip=F0qWKRWNFI9XKxR&token=-N_FHCnKyRBl&stream=1"
      />
    </>
  );
};
