


query.post(".././formularios_moi/formulario_cliente/validar", function(req,res){
    const datos = req.body;
    
    const cedula = datos.idcliente_num_documento;
    const nombre = datos.nombre_cliente;
    const apellido = datos.apellido;
    const correo = datos.correo;
    const dir = datos.direccion;

    const buscar = " SELECT * FROM `moi`.`cliente` WHERE idcliente_num_documento = "+documento+" ";

    conexion.query(buscar,function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length>0){
                console.log("cliente ya registrado");
            }else{
                const registrarCliente = "INSERT INTO `moi`.`cliente` (`idcliente_num_documento`, `nombre_cliente`, `apellido`, `correo electronico`, `direccion`) VALUES ('"+cedula+"', '"+nombre+"', '"+apellido+"', '"+correo+"', '"+dir+"')";
                conexion.query(registrarCliente, function(error){
                    if(error){
                        throw error;
                    }else{
                        console.log("datos insertados");
                    }
                });
            }
        }
    });


});