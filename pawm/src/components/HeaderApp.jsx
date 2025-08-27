import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, Home as HomeIcon } from "@mui/icons-material";
import { useState } from "react";

export function HeaderApp({ headerProp }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={6}
      className="bg-black rounded-lg m-2 shadow-lg"
    >
      <Toolbar className="flex justify-between items-center">
        {/* Left icons */}
        <div className="flex items-center gap-3">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <IconButton size="large" color="inherit">
            <HomeIcon />
          </IconButton>
        </div>

        {/* Center title */}
        <Typography
          variant="h5"
          className="font-bold text-white text-center flex-1"
        >
          {headerProp}
        </Typography>

        {/* Right account menu */}
        <div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
