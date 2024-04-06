import AppsIcon from "@mui/icons-material/Apps";
import CancelIcon from "@mui/icons-material/Cancel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Button,
  InputAdornment,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as TrolleIcon } from "~/assets/icon-trolle.svg";
import SelectMode from "../ModeSelect/SelectMode";
import AccountMenu from "./Menu/AccountMenu";
import Recent from "./Menu/Recent";
import Starred from "./Menu/Starred";
import Template from "./Menu/Template";
import Workspaces from "./Menu/Workspaces";

function AppBar() {
  const [valueSearch, setValueSearch] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.cssCustom.headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        paddingX: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <AppsIcon sx={{ color: "white" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrolleIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{ fontWeight: "bold", color: "white", fontSize: "20px" }}
          >
            Trolle
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            alignItems: "center",
          }}
        >
          <Workspaces />
          <Recent />
          <Template />
          <Starred />
          <Button
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                borderColor: "white",
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "white",
        }}
      >
        <TextField
          type="text"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
            "& label": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: " white" }} />
              </InputAdornment>
            ),
            endAdornment: valueSearch ? (
              <CancelIcon
                onClick={() => setValueSearch("")}
                sx={{ color: " white", fontSize: "medium", cursor: "pointer" }}
              />
            ) : null,
          }}
        />
        <SelectMode />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
        <AccountMenu />
      </Box>
    </Box>
  );
}

export default AppBar;
