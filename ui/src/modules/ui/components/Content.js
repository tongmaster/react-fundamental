import React from "react";
import { Container, Toolbar, Snackbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CategoryList from "modules/products/components/CategoryList";
import ProductList from "modules/products/components/ProductList";
import Cart from "modules/cart/components/Cart";
import Routes from "./Routes";
import * as uiAction from "../actions";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}));

export default function Content() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const flashMessage = useSelector((state) => state.ui.flashMessage);
  const clearFlashMessage = () => {
    const action = uiAction.clearFlashMessage();
    dispatch(action);
  };
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <Routes></Routes>
        {flashMessage && (
          <Snackbar
            open
            message={flashMessage}
            action={
              <Button color="inherit" size="small" onClick={clearFlashMessage}>
                Close
              </Button>
            }
          ></Snackbar>
        )}
      </Container>
    </main>
  );
}
