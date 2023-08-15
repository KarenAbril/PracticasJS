//Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
let userName = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");
let country = prompt("Ingresa tu país").toLowerCase();
let department = prompt(
  "Ingresa el departamento en el que vives en tu país"
).toLowerCase();
if (age === "" || age === null) {
    alert("Por favor ingresa tu edad");
  } else if (country === "" || country === null) {
    alert("Por favor ingresa tu país");
  } else if (department === "" || department === null) {
    alert("Por favor ingresa el departamento en el que vives en tu país");
} else {
    if (age > "18" && country === "canada" && department === "toronto") {
        alert("Puedes acceder a la beca");
      } 
      else if (age <= "18" || country !== "canada" || department !== "toronto") {
        alert("No puedes acceder a la beca");
      } 
}