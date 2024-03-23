import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import React from "react";

interface Props {
  label: string | null;
  options;
  event: (value) => void;
}

export default function SelectCustom(props: Props) {
  const { label = "", options = [], event } = props;
  const [selected, setSelected] = useState();

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (event) {
      event(e.target.value);
    }
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small-label">{label}</InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        value={selected ?? ""}
        label={label}
        onChange={handleChange}
      >
        {options?.map((item, index) => {
          return (
            <MenuItem key={index} value={item?.value}>
              {item?.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
