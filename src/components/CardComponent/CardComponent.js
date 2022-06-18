import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardComponent({ data }) {
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
          height="240"
          image={data.pictureUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Codigo Producto: {data.id}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            $ {data.price}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;
