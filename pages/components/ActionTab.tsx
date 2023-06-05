import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

const ActionTab = ({ value, handleChange, label, onClick }) => (
  <Box style={{ paddingRight: "20px" }}>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      textColor="inherit"
      indicatorColor="secondary"
    >
      <Tab
        label={label}
        onClick={onClick}
        sx={{
          fontSize: "1.1rem",
          ":hover": {
            color: "#1b1b1b",
            border: "none",
            background: "#DDA0DD",
          },
        }}
      />
    </Tabs>
  </Box>
);

export default ActionTab;
