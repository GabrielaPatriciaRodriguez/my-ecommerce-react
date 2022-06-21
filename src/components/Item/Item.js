import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Item({ data }) {
  const styles = {
    card: {
      margin: 20,
      width: 500,
    },
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={data.pictureUrl}
          alt="imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $ {data.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
