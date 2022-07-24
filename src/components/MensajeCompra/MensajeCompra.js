import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MensajeCompra = ({ purchasesId }) => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <Stack sx={{ width: 300 }} spacing={2}>
        <Alert severity="success">
          Gracias por su compra. Su Codigo de Transaccion es {purchasesId}
        </Alert>
      </Stack>
    </div>
  );
};

export default MensajeCompra;
