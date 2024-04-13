import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListColumns from "./ListColumns/ListColumns";
import { sortedArray } from "~/utils/helper";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";

function BoardContent(props) {
  const { board } = props;
  const [sortedColumn, setSortedColumn] = useState([]);

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      tolerance: 500, // touch screen 500 milisecond before dnd
      delay: 5,
    },
  });

  // if use poiterSensor need add touchAction: none in elm dnd. still error
  // const pointerSensor = useSensor(PointerSensor, {
  //   // Require the mouse to move by 10 pixels before activating
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    setSortedColumn(sortedArray(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDnD = (event) => {
    const { active, over } = event;

    if (!over?.id) return;

    if (active?.id !== over?.id) {
      const oldIndex = sortedColumn?.findIndex((e) => e?._id == active?.id);
      const newIndex = sortedColumn?.findIndex((e) => e?._id == over?.id);

      const newSortedColumns = arrayMove(sortedColumn, oldIndex, newIndex);
      const listSortedId = newSortedColumns?.map((el) => el?._id);
      setSortedColumn(newSortedColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDnD} sensors={sensors}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode == "dark" ? "#31495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trolle.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns boardColumns={sortedColumn} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
