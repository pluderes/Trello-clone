import { Box, Button } from "@mui/material";
import React from "react";
import Column from "./Column/Column";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function ListColumns(props) {
  const { boardColumns } = props;
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      {boardColumns?.map((item, index) => (
        <Column key={index} columns={item} />
      ))}
      {/* Box add new column */}
      <Box
        sx={{
          width: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: "white",
            width: "100%",
            py: 1,
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
