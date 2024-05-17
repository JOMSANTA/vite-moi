const facturar = document.getElementById("facturar");

console.log("facturar: ", facturar);

const validarCamposFactura = async () => {
    console.log("validar campos");

    const data = {
        facturaId: 123,
        clienteId: 1234566778,
      

    }

    const response = await fetch("/facturas", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } 
