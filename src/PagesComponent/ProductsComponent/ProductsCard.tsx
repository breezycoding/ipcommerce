import { FC, Fragment } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { TProducts } from "../../utils/types";
import noImage from "../../../public/images/new-no-photo-available.png";
import useStyles from "./styles";

const newrgba =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABHVJREFUWEeNlwmPq0gMhKtDMsf//597aYdcgFdlV0GTMNJG6mcm4eGvy1fT4uePQH4CCF7K8tpr/a1+zk/TP40XDXizuu/NRD0ifQFtD2CQZXOeEIsY7b13zqecNogdWO+92+e6CwKMf9KDduZd9wDd9XqfVTjYfSpBHtnfFNBeW4x/2bt2bYe0C7BIgT48/UOPpPd3byClQoVAnHH9e58D6dTOZfvverUqEWq3hzlxrMQukHH7R1i9/ISYtQjB6w7GavymxE6Vd4g9wP3fDsA7t3PZedogCJZJ6ap5qYhUo8uN9XotHalf6rV4jqoLxXvd+QTMBKCdyuYigCB6JfrkY1UYpK8QNIRD5TyO6SYFFHsD0On81NK1YcIgUmLbnBwbgLa/boi1Z9R/ajE/3gF659NDELbPTQ0rsaa05M/dn4CTATYbO0UYgpgqBJnpXcztmHa6A/m37PICUQ+oSlh3PAiAdtD3JyRAB9EistCrByTABEySnk6fdMp1k70D8wNYuJQXUCgSwLunUzk/ndfrDaBC0yLUlPkQAjDxGHvvnABPOr9tdr6VGrwvuOZOgQ6AjrsVjX93amQOrAB8Bp0r4bjrdM513VYqcS2gVOEBMClTBSmQTgZguAiA9oIwDH9rDMcrAB9CAIZgBeDODTDqegRSBSmRAFaBClD6swAuwPABnD4QJwMNCEHsFWAuvClwAx4EoPMReIzA9CMVrsBy71RgIraSmc7kmDZ8LYjgPTi9hIASOgkz8e7AQwo8RsTzJyGaLKYRWBiKe4WBlbQD+ASGWpHWSigXjgG6JGTy5boiuPNUgBA/aKkC1aAKNyXjEcAXMHwJoCDWULQjBbgLV0GWYIUgLH/uXhC087VyIZiMSsQMwYd2/wWcCVB2DzAchIBVmS2YDYh94IZIFRR/On1VgQBZDbOaUQeQzr+BM5dCQbisiEMF2JDcjKoLFoASUc5LhRGNYaAKbkzZjJyEkj+dczkUAmiHCigRPYgIkCXZl2I5z1ygzTC4H6gdZxVY/m/gUhBbMlYivpShZmR2xGpIkaFQLjgUcu7SbO4HVC5nghQ4fSIY91WBb8RZ1cAmdZiEWYpsy9XnY23LbsddT0iQKxorwQowh3LgsBERwPJ/Iy4MyWfmAnOAveAXBTicajAFJ19CqC+8dsWJeUA4DafsBT3ApkACqBLYpjmY3gF8ZNV4jlTCVdEPJrflmguNgLw3Zxu7IXfI3crphfJXJeDsXkAFFk/D1wP8gkgIjdxehZyM+wHVfH7YAXz8D4A58pT0/uE5xUd0H8+UkOt4NgRH8x0tz45sRlbgFYBqVA7EUGeEFgTwxyCyNal9QiaEmpPPBqmCknN67AHaUAOIpXj5KvkzB15DMPkt0cdUH7P98uKjmlVwMnpOHAEAdfigApUHkX2AMJoHeVagAhOPZH7DkXMr4BcpVUR1SAPQSoGcGVSAZ8UKQc77XwBKGQM8F+WAXq/0TtG9vikMej9wY1on5XEIVgDWfYagQpFqnAlQOfAfsTZTFyMv4WkAAAAASUVORK5CYII=";

const ProductsCard: FC<TProducts> = ({ products = [] }) => {
  const { classes } = useStyles();

  const displayProducts = (): JSX.Element[] | null => {
    if (products && products.length > 0 && Array.isArray(products)) {
      return products.map<JSX.Element>(({ id, title, price, image }) => {
        return (
          <Grid item lg={3} md={4} sm={4} xs={6} key={id}>
            <Card>
              <CardActionArea>
                <Link href={`/product/${id}`} aria-label={`product-link-${id}`}>
                  <CardContent className={classes.imageContainer}>
                    <div className={classes.imageContainerMain}>
                      <Image
                        src={image}
                        alt="Picture of the author"
                        aria-label={title}
                        blurDataURL={newrgba}
                        placeholder="blur"
                        fill
                        sizes="(max-width: 768px) 50vw,
                        (max-width: 1200px) 25vw,
                        50vw"
                        style={{
                          objectFit: "contain",
                          padding: "7%",
                        }}
                      />
                    </div>
                  </CardContent>
                  <CardContent>
                    <Typography
                      classes={{ root: classes.title }}
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="h6"
                      gutterBottom
                      align="center"
                      classes={{ root: classes.price }}
                      component="div"
                    >
                      <span>&#8369;</span>
                      {price}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        );
      });
    }
    debugger;
    return null;
  };

  return (
    <Fragment>
      <Grid container mt={4} spacing={4}>
        {displayProducts()}
      </Grid>
    </Fragment>
  );
};

export default ProductsCard;
