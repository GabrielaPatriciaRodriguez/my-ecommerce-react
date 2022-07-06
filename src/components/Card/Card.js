import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

function Carta({item}) {
  const { clear } = useContext(CartContext);
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.pictureUrl}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio Unitario: $ {item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cantidad de unidades: {item.qty}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <button
            onClick={() => {
              clear();
            }}
          >
            Vaciar
          </button>
    </div>
  );
}

export default Carta;
