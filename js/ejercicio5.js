//Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
//(onclick)
let userName = ""
function showMessage() {
    let userName = prompt("Por favor ingresa tu nombre")
    alert("¡Hola," + userName + "! Espero que estés disfrutando de JavaScript.")
}