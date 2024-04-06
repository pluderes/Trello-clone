/* eslint-disable indent */
import { DarkMode, LightMode, SettingsBrightness } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
} from "@mui/material";
import React from "react";

function SelectMode() {
  const { mode, setMode } = useColorScheme();

  const handleChangeMode = (e) => {
    setMode(e?.target?.value);
  };

  return (
    <FormControl sx={{ minWidth: "120" }} size="small">
      <InputLabel
        id="select-small-label"
        sx={{
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        value={mode ?? ""}
        label="Mode"
        onChange={handleChangeMode}
        sx={{
          maxHeight: "37px",
          color: "white",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiSvgIcon-root": {
            color: "white",
          },
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "centerr", gap: 1 }}>
            <LightMode /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "centerr", gap: 1 }}>
            <DarkMode /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "centerr", gap: 1 }}>
            <SettingsBrightness /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectMode;
