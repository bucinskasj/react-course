import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TelegramIcon from '@mui/icons-material/Telegram';
import AddIcon from '@mui/icons-material/Add';
import {
  Business,
  ExpandLess,
  ExpandMore,
  Settings,
  ViewList,
} from "@mui/icons-material";
import { Collapse, Divider, Typography } from "@mui/material";
import { useState } from "react";

export default function WorkspaceSettings() {
  const [open, setOpen] = useState();



  const handlecClick = () => {
    setOpen(!open);
  };


  return (
    <React.Fragment>
      <List dense disablePadding sx={{ mt: 3 }}>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Business fontSize="large"/>
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
      <Divider />
      <List dense disablePadding sx={{ mt: 3 }}>
        <ListItemButton dense>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings & Members" />
        </ListItemButton>
        <ListItemButton dense>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <TelegramIcon />
          </ListItemIcon>
          <ListItemText primary="Updates" />
        </ListItemButton>
        <ListItemButton onClick={handlecClick} dense={true}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <ViewList />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <ListItemButton dense sx={{ pl: 4 }}>
            <ListItemText primary="Content Management System" />
          </ListItemButton>
          <ListItemButton dense sx={{ pl: 4 }}>
            <ListItemText primary="Content Management System" />
          </ListItemButton>
        </Collapse>
        <ListItemButton dense sx={{ mt: 3 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="New Project" />
        </ListItemButton>
      </List>
    </React.Fragment>
  );
}
