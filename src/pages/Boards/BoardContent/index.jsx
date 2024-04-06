import { ContentCopy, ContentPaste } from "@mui/icons-material";
import Cloud from "@mui/icons-material/Cloud";
import ContentCut from "@mui/icons-material/ContentCut";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachmentIcon from "@mui/icons-material/Attachment";

function BoardContent() {
  const HEADER_HEIGHT = "50px";
  const FOOTER_HEIGHT = "56px";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Box
          sx={{
            width: "300px",
            bgcolor: (theme) =>
              theme.palette.mode == "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trolle.boardContentHeight} - ${theme.spacing(5)})`,
          }}
        >
          <Box
            sx={{
              height: HEADER_HEIGHT,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Column title
            </Typography>
            <Box>
              <Tooltip title="More action">
                <ExpandMoreIcon
                  sx={{ color: "text.primary", cursor: "pointer" }}
                  id="basic-button"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
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
              ${HEADER_HEIGHT} - 
              ${FOOTER_HEIGHT})`,
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.pinimg.com/originals/58/3a/6f/583a6f5c3f53cac84ad54ebda194609b.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card media</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button size="small" startIcon={<GroupIcon />}>
                  15
                </Button>
                <Button size="small" startIcon={<ModeCommentIcon />}>
                  10
                </Button>
                <Button size="small" startIcon={<AttachmentIcon />}>
                  99
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: FOOTER_HEIGHT,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            width: "300px",
            bgcolor: (theme) =>
              theme.palette.mode == "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trolle.boardContentHeight} - ${theme.spacing(5)})`,
          }}
        >
          <Box
            sx={{
              height: HEADER_HEIGHT,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Column title
            </Typography>
            <Box>
              <Tooltip title="More action">
                <ExpandMoreIcon
                  sx={{ color: "text.primary", cursor: "pointer" }}
                  id="basic-button"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
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
              ${HEADER_HEIGHT} - 
              ${FOOTER_HEIGHT})`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#D6DAC8",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#D6DAC8",
              },
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
                overflow: "unset",
              }}
            >
              <CardContent sx={{ p: 1.5, "&:last-child": { p: "1.5" } }}>
                <Typography>Trolle card</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: FOOTER_HEIGHT,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
