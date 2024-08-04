import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import Search from "./Search/SearchField";
import Links from "./Links";

export default function Navigation() {
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar variant="regular" justify-content="space-between">
        <IconButton>
          <MovieIcon />
        </IconButton>
        <Typography fontSize={"large"} sx={{ flexGrow: 1 }}>
          Old Skul cartoons
        </Typography>
        <Search />
        <Links />
      </Toolbar>
    </AppBar>
  );
}
