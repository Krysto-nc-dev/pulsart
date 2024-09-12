import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import userPic from "../../assets/user.png";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ListItem
      button
      component={Link}
      to={to}
      selected={selected === title}
      onClick={() => setSelected(title)}
      sx={{ color: colors.grey[100] }}
    >
      <ListItemIcon sx={{ color: colors.grey[100] }}>{icon}</ListItemIcon>
      {/* Masquer le texte si la sidebar est pliée */}
      {!isCollapsed && <ListItemText primary={title} />}
    </ListItem>
  );
};

const AdminSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Drawer
      variant="permanent"
      open={!isCollapsed}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: colors.primary[700],
          color: colors.grey[100],
          width: isCollapsed ? "80px" : "240px",
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent={isCollapsed ? "center" : "space-between"}
        alignItems="center"
        padding={isCollapsed ? "0" : "16px"}
      >
        {!isCollapsed && (
          <Typography variant="h6" color={colors.grey[100]}>
            ADMINISTRATION
          </Typography>
        )}
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{ color: colors.grey[100] }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {/* User Info */}
      {!isCollapsed && (
        <Box textAlign="center" mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              src={userPic}
              width="100px"
              height="100px"
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            Stoyann
          </Typography>
          <Typography variant="h6" color={colors.greenAccent[500]}>
            Administrateur
          </Typography>
        </Box>
      )}

      {/* Menu Items */}
      <List>
        <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Typography variant="h6" color={colors.grey[300]} sx={{ pl: 2, pt: 1 }}>
          Data
        </Typography>
        <Item
          title="Equipe"
          to="/team"
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Contacts"
          to="/contacts"
          icon={<ContactsOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Facturations"
          to="/invoices"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />

        <Typography variant="h6" color={colors.grey[300]} sx={{ pl: 2, pt: 1 }}>
          Pages
        </Typography>
        <Item
          title="Profile"
          to="/form"
          icon={<PersonOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Agenda"
          to="/calendar"
          icon={<CalendarTodayOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="FAQ"
          to="/faq"
          icon={<HelpOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />

        <Typography variant="h6" color={colors.grey[300]} sx={{ pl: 2, pt: 1 }}>
          Charts
        </Typography>
        <Item
          title="Bar Chart"
          to="/bar"
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
        <Item
          title="Geography Chart"
          to="/geography"
          icon={<MapOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          isCollapsed={isCollapsed}
        />
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
