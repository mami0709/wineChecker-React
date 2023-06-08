import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  width: "500px",
  backgroundColor: "#ffffff",
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#683212",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#bb947c",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#683212",
  },
  "& .MuiFormLabel-root": {
    color: "#b8b8b8",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#683212",
  },
});

const CustomTextField = ({
  name,
  label,
  value,
  handleChange,
  error,
  helperText,
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    handleChange(name, localValue);
  }, [localValue, handleChange, name]);
  return (
    <StyledTextField
      variant="outlined"
      id={name}
      name={name}
      label={label}
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      error={error}
      helperText={helperText}
    />
  );
};

export default CustomTextField;
