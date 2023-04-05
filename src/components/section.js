import * as React from "react";
import { Box } from "@mui/material";

export default function Home({ children }) {
  return (
    <Box
      className="section"
      sx={{
        background: "black",
      }}
    >
      {children}
    </Box>
  );
}
