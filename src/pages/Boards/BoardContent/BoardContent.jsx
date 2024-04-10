import { Box } from "@mui/material";
import React from "react";
import ListColumns from "./ListColumns/ListColumns";
import { sortedArray } from "~/utils/helper";

function BoardContent(props) {
  const { board } = props;

  const listColumnSorted = sortedArray(
    board?.columns,
    board?.columnOrderIds,
    "_id"
  );

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
      <ListColumns boardColumns={listColumnSorted} />
    </Box>
  );
}

export default BoardContent;
