import React, { useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AdminLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Détecte le mode mobile

  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar onCollapse={(isCollapsed) => setSidebarCollapsed(isCollapsed)} />

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
        <Box
          component="section"
          sx={{
            marginLeft: isMobile ? "89px" : "19px", // Marge gauche uniquement en mode mobile
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
