import { Box } from "@mui/material";
import React from "react";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode == "dark" ? "#31495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trolle.boardContentHeight,
        p: "10px 0",
      }}
    >
      <ListColumns />
    </Box>
  );
}

export default BoardContent;
