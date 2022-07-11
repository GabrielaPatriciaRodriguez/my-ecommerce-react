import * as React from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import MensajeCompra from "../MensajeCompra/MensajeCompra";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useState } from "react";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const initialState = {
  name: "",
  telephone: "",
  email: "",
};

const Formulario = () => {
  const [values, setValues] = useState(initialState);

  const [purchasesId, setPurchasesId] = useState("");

  console.log(values);

  const handlerOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log(values);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchasesId(docRef.id);
    setValues(initialState);
  };

  return (
    <div>
      <h1>Complete este formulario para finalizar la compra</h1>
      <FormControl style={{ margin: 10 }} onSubmit={onSubmit}>
        <TextField
          style={{ margin: 10, width: 450 }}
          id="outlined-basic"
          label="nombre"
          variant="outlined"
          placeholder="nombre"
          name="name"
          value={values.name}
          onChange={handlerOnChange}
        />
        <TextField
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
        >
          Send
        </Button>
      </FormControl>
      {purchasesId && <MensajeCompra purchasesId={purchasesId} />}
    </div>
  );
};

export default Formulario;
