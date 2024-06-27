/* eslint-disable no-extra-boolean-cast */
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
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";
import Column from "./ListColumns/Column/Column";
import CardItem from "./ListColumns/Column/ListCards/CardItem/CardItem";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent(props) {
  const { board } = props;

  const [sortedColumn, setSortedColumn] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

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

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const hadnleDragOver = (event) => {
    const { active, over } = event;

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;

    if (!active || !over) return;

    const {
      id: activeCardId,
      data: { current: activeDragCardData },
    } = active;
    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeCardId);
    const overColumn = findColumnByCardId(overCardId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn?._id !== overColumn?._id) {
      setSortedColumn((prevState) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card?._id === overCardId
        );
        let newCardindex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardindex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.card?.length + 1;

        const nextColumns = cloneDeep(prevState);
        const nextActiveColumns = nextColumns?.find((column) => column?._id === activeColumn?._id);
        const nextOverColumns = nextColumns?.find((column) => column?._id === overColumn?._id);

        if (nextActiveColumns) {
          nextActiveColumns.cards = nextActiveColumns?.cards?.filter((item) => item?._id !== activeDragItemId);
          nextActiveColumns.cardOrderIds = nextActiveColumns?.cards?.map((item) => item?._id);
        }

        if (nextOverColumns) {
          nextOverColumns.cards = nextOverColumns?.cards?.filter((item) => item?._id !== activeDragItemId);
          nextOverColumns.cards = nextOverColumns?.cards?.toSpliced(newCardindex, 0, activeDragCardData);
          nextOverColumns.cardOrderIds = nextOverColumns?.cards?.map((item) => item?._id);
        }
        return nextColumns;
      });
    }
  };

  const findColumnByCardId = (cardId) => {
    return sortedColumn?.find((column) =>
      column?.cards?.map((card) => card?._id)?.includes(cardId)
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active || !over) return;

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) return;

    if (!over?.id) return;

    if (active?.id !== over?.id) {
      const oldIndex = sortedColumn?.findIndex((e) => e?._id == active?.id);
      const newIndex = sortedColumn?.findIndex((e) => e?._id == over?.id);

      const newSortedColumns = arrayMove(sortedColumn, oldIndex, newIndex);
      const listSortedId = newSortedColumns?.map((el) => el?._id);
      setSortedColumn(newSortedColumns);
    }

    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  const dropItemOverlay = {
    sideEffect: defaultDropAnimationSideEffects({
      styles: {
        active: { opcacity: "0.5" },
      },
    }),
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={hadnleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
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
        <DragOverlay dropAnimation={dropItemOverlay}>
          {!!activeDragItemType ? (
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
              <Column columns={activeDragItemData} />
            ) : (
              <CardItem detailCard={activeDragItemData} />
            )
          ) : null}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
