import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import FestivalRoundedIcon from "@mui/icons-material/FestivalRounded";
import React, { useState } from "react";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          NBUS TOUR
        </Typography>
        <FestivalRoundedIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/The-Hon-Pravind-Kumar-Jugnauth.png"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/The-Hon-Pravind-Kumar-Jugnauth.png"
          />
          <Typography variant="span">Cuthbert</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        TransitionComponent={Fade}
        onClose={(e) => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
