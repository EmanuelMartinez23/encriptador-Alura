/*Variable */
// Almacenamos lo que el usuario introduce
const textArea = document.querySelector(".text-area");
// Almacenamos lo cifrado del otro text area
const mensaje = document.querySelector(".mensaje");
// boton de copiar
const btnCopiar = document.querySelector(".copiar");


function btnEncriptar(){
    // validmos que no tengamos letras con acentos ni caracteres especiales con expresiones reguare
    if(/[^a-z\n\s]/.test(textArea.value)){
       alert('El texto no debe contener letras en mayusculas, con acento ni caracteres especiales.');
        return;
    }
    // de otra manera que siga con el cifrado
    else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "" // limpiamos
        mensaje.style.backgroundImage = "none"
        btnCopiar.style.display = 'block';

    }
   
}

function btnDesencriptar(){
    // si es que son letras validas hacemos el desencriptado
    if(/[a-z\n\s]/.test(textArea.value)){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "" // limpiamos
        mensaje.style.backgroundImage = "none"
        btnCopiar.style.display = 'block';
        
    }
    else {
        alert('El texto no debe contener letras en mayusculas, con acento ni caracteres especiales.');
        return;

    }
    
    
}
/*Función para hacer cifrar */

function encriptar(stringEncriptar){
    let textoEncriptado = stringEncriptar
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

    return textoEncriptado;
}

/*Función para desencriptar  */
function desencriptar(stringDesencriptar){
    let textoDesencriptado = stringDesencriptar
            .replace(/enter/g , 'e')
            .replace(/imes/g , 'i')
            .replace(/ai/g , 'a')
            .replace(/ober/g , 'o')
            .replace(/ufat/g , 'u')

    return textoDesencriptado

}

/*función de botón de copiar  ctrl + c */
function copiarATexto(){
    navigator.clipboard.writeText(mensaje.value);
}
