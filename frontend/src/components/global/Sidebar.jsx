import React, { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaCog,
  FaCalendarAlt,
  FaUser,
  FaMoneyBill,
} from "react-icons/fa";
import { useTheme } from "@mui/material/styles"; // Pour gérer les couleurs du thème

const CustomSidebar = ({ onCollapse }) => {
  const [collapsed, setCollapsed] = useState(true);
  const theme = useTheme();
  const isMobile = window.innerWidth <= 768; // Gestion du mode mobile

  const handleToggle = () => {
    setCollapsed(!collapsed);
    if (onCollapse) onCollapse(!collapsed);
  };

  return (
    <ProSidebar
      collapsed={collapsed}
      breakPoint="md"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          height: "100vh",
          position: isMobile ? "fixed" : "absolute", // En mode mobile, elle passe au-dessus du contenu
          top: 0,
          left: 0,
          zIndex: 1001, // S'assure qu'elle soit au-dessus du contenu
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[100], // Gestion dynamique de la couleur
          transition: "width 0.3s ease, left 0.3s ease", // Transition fluide pour la largeur
          boxShadow: collapsed ? "none" : "2px 0 5px rgba(0,0,0,0.1)", // Effet d'ombre quand elle est dépliée
          overflowX: "hidden", // Cache les débordements
          width: collapsed ? "80px" : "250px", // Largeur dynamique
        },
      }}
    >
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
          alignItems: "center",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[100],
          cursor: "pointer",
          borderBottom: "1px solid #ddd", // Séparateur visuel
        }}
        onClick={handleToggle}
      >
        {collapsed ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
            padding: "10px 20px",
            margin: "10px 0",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          },
        }}
      >
        <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}>
          {!collapsed && "Tableau de bord"}
        </MenuItem>

        <MenuItem icon={<FaCalendarAlt />} component={<Link to="/calendar" />}>
          {!collapsed && "Calendrier"}
        </MenuItem>
        <MenuItem icon={<FaMoneyBill />} component={<Link to="/billing" />}>
          {!collapsed && "Facturation"}
        </MenuItem>
        <SubMenu label={!collapsed && "Settings"} icon={<FaCog />}>
          <MenuItem icon={<FaUser />} component={<Link to="/profile" />}>
            {!collapsed && "Profile"}
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default CustomSidebar;
