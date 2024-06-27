import AttachmentIcon from "@mui/icons-material/Attachment";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { sortedArray } from "~/utils/helper";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

function CardItem(props) {
  const { detailCard } = props;

  const showCardAction =
    !!detailCard?.memberIds?.length ||
    !!detailCard?.comments?.length ||
    !!detailCard?.attachments?.length;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: detailCard._id, data: { ...detailCard } });

  const styleDND = {
    // TouchAction: "none", // fix if use pointerSensor
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? "50%" : undefined,
    border: isDragging ? "1px solid #E72929" : undefined,
  };

  const listCardSorted = sortedArray(
    detailCard?.cards,
    detailCard?.cardOrderIds,
    "_id"
  );

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        overflow: "unset",
      }}
      ref={setNodeRef}
      style={styleDND}
      {...attributes}
      {...listeners}
    >
      {detailCard?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={detailCard?.cover}
          title="green iguana"
        />
      )}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{detailCard?.title}</Typography>
      </CardContent>
      {showCardAction && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          {!!detailCard?.memberIds?.length && (
            <Button size="small" startIcon={<GroupIcon />}>
              {detailCard?.memberIds?.length}
            </Button>
          )}
          {!!detailCard?.comments?.length && (
            <Button size="small" startIcon={<ModeCommentIcon />}>
              {detailCard?.comments?.length}
            </Button>
          )}
          {!!detailCard?.attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {detailCard?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default CardItem;
