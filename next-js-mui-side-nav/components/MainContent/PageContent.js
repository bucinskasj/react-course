import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function PageContent(){
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Typography variant="h5">Heading</Typography>
    </Box>
  );
};
