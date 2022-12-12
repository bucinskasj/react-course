import { Divider, Drawer } from "@mui/material";
import NavigationItems from "./DrawerContent/NavigationItems";
import WorkspaceToolbar from "./DrawerContent/WorkSpaceToolbar";

const DrawerContainer = () => {
  const drawerWidth = 280;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          border: "none",
          padding: "8px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <WorkspaceToolbar/>
      <Divider/>
      <NavigationItems/>
    </Drawer>
  );
};

export default DrawerContainer;
