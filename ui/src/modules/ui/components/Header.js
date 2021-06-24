import React from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Switch,
  FormControlLabel,
  IconButton,
  Badge,
} from "@material-ui/core";
import logo from "assets/images/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode as toggle } from "../uiSlice";
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer,
  },
  logoLink: {
    marginRight: theme.spacing(2),
  },
  logoImage: {
    height: 30,
    width: 30,
  },
  spacer: {
    flexGrow: 1,
  },
}));
export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);
  const countProduct = useSelector((state) => state.cart.productIds).length;
  const navigateToCart = () => history.push("/cart");
  const toggleDarkMode = () => {
    dispatch(toggle());
  };
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link
          component={RouterLink}
          className={classes.logoLink}
          to="/"
          color="inherit"
          underline="none"
        >
          <img src={logo} alt="Shopping" className={classes.logoImage} />
        </Link>

        <Link
          component={RouterLink}
          to="/products"
          color="inherit"
          underline="none"
        >
          Products
        </Link>
        <div className={classes.spacer}></div>
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              onChange={toggleDarkMode}
              checked={darkMode}
            ></Switch>
          }
          label="Dark"
        ></FormControlLabel>
        <IconButton color="inherit">
          <Badge badgeContent={countProduct} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
