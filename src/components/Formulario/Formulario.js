import * as React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import MensajeCompra from "../MensajeCompra/MensajeCompra";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useState, useContext } from "react";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";

const initialState = {
  name: "",
  telephone: "",
  email: "",
};

const Formulario = () => {
  const { cart, clear, getTotal } = useContext(CartContext);
  
  const [values, setValues] = useState(initialState);

  const [purchasesId, setPurchasesId] = useState("");

  const handlerOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    const data = {
      buyer: values,
      items: cart.map(item => {
        return{
          id: item.id,
          title: item.title,
          price: item.price
        }
      }),
      date: Date.now(),
      total: getTotal(),
     }
    const docRef = await addDoc(collection(db, "purchases"),data)
    setPurchasesId(docRef.id);
    setValues(initialState);
    clear()
  };

  return (
    <div>
      <h1>Complete este formulario para finalizar la compra</h1>
      <FormControl >
        <TextField
          required
          style={{ margin: 10, width: 290 }}
          id="outlined-basic"
          label="nombre"
          variant="outlined"
          placeholder="nombre"
          name="name"
          value={values.name}
          onChange={handlerOnChange}
        />
        <TextField
          required
          style={{ margin: 10 }}
          id="outlined-basic"
          label="telefono"
          variant="outlined"
          placeholder="telefono"
          name="telephone"
          value={values.telephone}
          onChange={handlerOnChange}
        />
        <TextField
          required
          style={{ margin: 10 }}
          id="outlined-basic"
          label="email"
          variant="outlined"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handlerOnChange}
        />
        <Button
          onClick={() => {
            onSubmit();
          }}
          variant="contained"
          endIcon={<SendIcon />}
          disabled={purchasesId!==''}
        >
          Enviar
        </Button>
      </FormControl>
      {purchasesId && <MensajeCompra purchasesId={purchasesId} />}
    </div>
  );
};

export default Formulario;
