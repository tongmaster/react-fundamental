import React from "react";
import { Container, Toolbar, Snackbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CategoryList from "modules/products/components/CategoryList";
import ProductList from "modules/products/components/ProductList";
import Cart from "modules/cart/components/Cart";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        {/* <ProductList></ProductList> */}
        <Cart></Cart>
        <Snackbar
          open
          message="Hello"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  );
}
