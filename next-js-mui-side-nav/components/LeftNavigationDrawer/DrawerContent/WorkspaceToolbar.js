import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Business } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const WorkspaceToolbar = () => {
  return (
    <List dense disablePadding sx={{ mt: 3 }}>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Business fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Acme Corp"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              variant="body2"
              color="text.secondary"
            >
              user@acmecorp.com
            </Typography>
          }
        />
      </ListItemButton>
    </List>
  );
};

export default WorkspaceToolbar;
