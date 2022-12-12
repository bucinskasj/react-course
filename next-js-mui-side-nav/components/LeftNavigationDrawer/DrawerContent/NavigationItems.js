import * as React from "react";
import { useState } from "react";

// MUI Compotenents
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  Settings,
  ViewList,
  ExpandLess,
  ExpandMore,
  Add,
  Telegram,
} from "@mui/icons-material";

const NavigationItems = () => {
  const [open, setOpen] = useState();

  const handlecClick = () => {
    setOpen(!open);
  };

  return (
    <List dense disablePadding sx={{ mt: 3 }}>
      <ListItemButton dense>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings & Members" />
      </ListItemButton>
      <ListItemButton dense>
        <ListItemIcon sx={{ minWidth: 32 }}>
          <Telegram />
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
          <Add />
        </ListItemIcon>
        <ListItemText primary="New Project" />
      </ListItemButton>
    </List>
  );
};

export default NavigationItems;
