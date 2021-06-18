import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  content: {
    height: "100%",
  },
  amountContainer: {
    marginBottom: theme.spacing(2),
  },
  amount: {
    padding: theme.spacing(0, 2),
  },
}));

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await axios.get(`/products/${id}`);

      setProduct(data);
    };

    loadProduct();
  }, []);

  const buyNow = () => {
    history.push("/cart");
  };

  if (!product) return null;

  return (
    <Paper className={classes.root}>
      <Grid
        container
        spacing={2}
        justify={isMediumUp ? "flex-start" : "center"}
      >
        <Grid item>
          <img src={product.image} alt={product.name} />
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.content}
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" component="h1">
                {product.name}
              </Typography>
              <p>{product.desc}</p>
            </Grid>
            <Grid item>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="primary button group"
              >
                <Button onClick={buyNow}>Buy Now</Button>
                <Button>Add to Cart</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
