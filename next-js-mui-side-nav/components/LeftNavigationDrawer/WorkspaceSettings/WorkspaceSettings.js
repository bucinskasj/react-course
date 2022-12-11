import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Business,
  ExpandLess,
  ExpandMore,
  Settings,
  ViewList,
} from "@mui/icons-material";
import {
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function WorkspaceSettings() {
  const [open, setOpen] = useState();

  const handlecClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <List dense disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText
            primary="Workspace name"
            sx={{ ml: -2 }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  info@statusarea.com
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </List>
      <Divider />
      <List dense disablePadding>
        <ListItemButton dense>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Updates" sx={{ ml: -2 }} />
        </ListItemButton>
        <ListItemButton dense>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings & Members" sx={{ ml: -2 }} />
        </ListItemButton>
        <ListItemButton onClick={handlecClick} dense={true}>
          <ListItemIcon>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Projects" sx={{ ml: -2 }} />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <ListItemButton dense sx={{ pl: 7 }}>
            <ListItemText primary="Content Management System" />
          </ListItemButton>
          <ListItemButton dense sx={{ pl: 7 }}>
            <ListItemText primary="Content Management System" />
          </ListItemButton>
        </Collapse>
      </List>
    </React.Fragment>
  );
}
