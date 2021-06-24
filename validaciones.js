
function validarFormulario(event){

    const integrantes = Number($formulario["cantidad-integrantes"].value);
    const edades = obtenerEdades();
    
    const errorIntegrantes = validarIntegrantes(integrantes);
    const errorEdades = validarEdades(edades);
    
    const errores = {
        integrantes: errorIntegrantes,
        edades: errorEdades
    };

   const formularioExitoso = controladorDeErrores(errores);

    if(formularioExitoso === 0){

         document.querySelector("#exito").className = "";
         mostrarResultados();

    }else{

         document.querySelector("#exito").className = "oculto";

    }

    event.preventDefault();

}

function controladorDeErrores(errores){

    const keys = Object.keys(errores)
    const $errores = document.querySelector("#mostrar-errores");
    $errores.innerHTML = "";
    let contadorError = 0;

    keys.forEach(function(key) {
         const error = errores[key]
         mostrarErrores();
         

        if(error){
              ocultarResultados();
              const contenedorError = document.createElement("li");
              contenedorError.innerText = error;
              $errores.appendChild(contenedorError);

              contadorError++
        }
        
    });

    return contadorError;

};

function validarEdades(edades){
    
    for(let i = 0; i < edades.length; i++){
         
        if(edades[i] < 0 ){
            return "Las edades ingresadas no pueden tener valores negativos.";
        }

        if(edades[i] === ""){
            return "Hay campos sin completar. Completelos e intentelo de nuevo."
        }

        if(edades[i] === 0){
            return "Las edades ingresadas deben ser mayores a 0.";
        }

        if(edades[i] > 99){
            return "Solo se permiten edades entre 1 y 99."
        };

    }
         
    return "";

}

function validarIntegrantes(integrantes){

    if(integrantes <= 0){

         return "La cantidad de integrantes debe ser mayor a 0.";
    }

    return "";

}

const $formulario = document.querySelector("#calculador-edades");
$formulario.onsubmit = validarFormulario;
