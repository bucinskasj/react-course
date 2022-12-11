import { Drawer } from "@mui/material";
import WorkspaceSettings from "./WorkspaceSettings/WorkspaceSettings";

const DrawerContainer = () => {
  const drawerWidth = 300;

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: 'none',
            padding: '8px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <WorkspaceSettings />
      </Drawer>
  );
};

export default DrawerContainer;
