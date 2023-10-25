import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WixPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: '100vh',
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://videolity-demo.web.app/mobile/netflix/demo"
        frameborder="0"
      />
    </Box>
  );
}
