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

function CardItem(props) {
  const { detailCard } = props;

  const showCardAction =
    !!detailCard?.memberIds?.length ||
    !!detailCard?.comments?.length ||
    !!detailCard?.attachments?.length;

  return (
    <Card
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        overflow: "unset",
      }}
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
