import { Fragment, useState, MouseEvent } from "react";
import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

import DrawerNavigation from "../DrawerNavigation";
import ContentContainer from "../ContentContainer";
import useStyles from "./styles";

const Header = () => {
  const { classes } = useStyles();

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawerMenu, setOpenDrawerMenu] = useState<boolean>(false);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (): void => {
    setOpenDrawerMenu(!openDrawerMenu);
  };

  return (
    <Fragment>
      <ContentContainer>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={handleOpenMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  <Link href="/">IP COMMERCE</Link>
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIconWrapper}>
                    <SearchIcon />
                  </div>
                  <InputBase className={classes.styledInputBase} />
                </div>
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My Account</MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
      </ContentContainer>
      <DrawerNavigation
        isOpen={openDrawerMenu}
        handleOpenDrawer={handleOpenMenu}
      />
    </Fragment>
  );
};

export default Header;
