import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material";

const drawerWidth = 250;
const listItems = ["Home", "Profile", "All shows"];
const useStyles = styled({
  drawer: {
    width: drawerWidth,
  },
});

export default function DrawerNavigation() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="right"
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        {listItems.map((listItem) => (
          <ListItem key={listItem}>
            <ListItemText primary={listItem} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
