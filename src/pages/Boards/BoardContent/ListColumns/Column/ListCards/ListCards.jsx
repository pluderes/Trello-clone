import { Box } from "@mui/material";
import React from "react";
import CardItem from "./CardItem/CardItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCards(props) {
  const { cards } = props;
  return (
    <SortableContext
      items={cards?.map((el) => el?._id)}
      strategy={verticalListSortingStrategy}
    >
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
        {cards?.map((item, index) => (
          <CardItem key={index} detailCard={item} />
        ))}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
