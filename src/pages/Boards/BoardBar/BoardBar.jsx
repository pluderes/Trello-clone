import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import React from "react";

function BoardBar() {
  const menuStype = {
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "4px",
    border: "none",
    paddingX: "4px",
    ".MuiSvgIcon-root": {
      color: "white",
      "&:hover": {
        bgcolor: "primary.50",
      },
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.cssCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        paddingX: 2,
        backgroundColor: (theme) =>
          theme.palette.mode == "dark" ? "#31495e" : "#1976d2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Chip
          icon={<DashboardIcon />}
          label="Trolle board"
          clickable
          sx={menuStype}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private workspace"
          clickable
          sx={menuStype}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to drive"
          clickable
          sx={menuStype}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automations"
          clickable
          sx={menuStype}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={menuStype}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "primary.main",
        }}
      >
        <Button
          startIcon={<PersonAddAlt1Icon />}
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
          total={4251}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: "34px",
              height: "34px",
              fontSize: "16px",
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4a0be",
              },
            },
          }}
        >
          <Tooltip title={"Remy Sharp"}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
