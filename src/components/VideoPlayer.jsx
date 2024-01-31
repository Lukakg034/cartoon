const VideoPlayer = () => {
  const megaVideoUrl =
    "https://mega.nz/embed/4ARAGZqA#m8olMoALJv0kaN4HVjtJpPNx7fe3mD8HMRhBdQvUDBs";

  return (
    <div>
      <h2>Video Player</h2>
      <video controls width="800" height="600">
        <source src={megaVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
