import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Link from "next/link";

const AppTab = ({ value, handleChange, label, href }) => (
  <Link href={href}>
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
  </Link>
);

export default AppTab;
