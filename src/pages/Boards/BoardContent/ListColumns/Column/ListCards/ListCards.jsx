import { Box } from "@mui/material";
import React from "react";
import CardItem from "./CardItem/CardItem";

function ListCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(${theme.trolle.boardContentHeight} - 
        ${theme.spacing(5)} - 
        ${theme.trolle.cardHeaderHeight} - 
        ${theme.trolle.cardFooterHeight})`,
      }}
    >
      <CardItem />
      <CardItem temporaryHideMedia />
    </Box>
  );
}

export default ListCards;
