import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import Search from "./Search/SearchField";

const navigationItems = ["Home", "Profile", "Login"];

export default function Navigation() {
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar variant="regular">
        <IconButton>
          <MovieIcon />
        </IconButton>
        <Typography fontSize={"large"} sx={{ flexGrow: 1 }}>
          Old Skul cartoons
        </Typography>
        <Search />
      </Toolbar>
    </AppBar>
  );
}
