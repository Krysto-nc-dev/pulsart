import React, { useState } from "react";
import Topbar from "../global/Topbar";

import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AdminSidebar from "../global/AdminSidebar";

const AdminLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <AdminSidebar />

      <Box
        component="main"
        style={{
          flexGrow: 1,
          transition: "margin-left 0.3s ease",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : theme.palette.grey[100],
          boxSizing: "border-box",
        }}
      >
        <Topbar />
        <Box className="ml-[89px]" component="section">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
