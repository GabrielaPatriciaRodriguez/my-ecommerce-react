import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

import { Link } from "react-router-dom";

function Item({ data }) {
  return (
    <>
      <Card sx={{ maxWidth: 300, marginTop: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={data.image}
            alt={data.category}
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              $ {data.price}
            </Typography>
            <Link to={`/item/${data.id}`} style={{ textDecoration: "none",}}>
          <Button
            style={{
              margin: 10,
              borderRadius: 15,
              borderColor: "gray",
              color: "whitesmoke",
              padding: 10,
              backgroundColor: "gray",
            }}
          >
            Detalle
          </Button>
        </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Item;
