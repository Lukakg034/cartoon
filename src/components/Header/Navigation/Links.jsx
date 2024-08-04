import { Box, Button } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

export default function Links() {
  return (
    <Box display={"flex"}>
      <Button variant="contained">Home</Button>
      <Button variant="contained">Login</Button>
      <Button variant="contained">Profile</Button>
      <ProfileAvatar />
    </Box>
  );
}
