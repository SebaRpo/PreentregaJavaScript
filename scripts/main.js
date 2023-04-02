//Las variables "total" y "descuento" se definen como 0, se utiliza let porque son variables que cambiaran

let total = 0;//Para almacenar la suma del costo de todos los productos
let descuento = 0;//Almacena el monto del descuento que se aplicará si el usuario es nuevo
let iva = 0;//Almacena el monto del iva 
const PORCENTAJE_IVA = 0.19; // Porcentaje del IVA en una constante porque no cambiará

// Pedir al usuario la cantidad de productos que desea agregar, se guarda en la variable cantidadProductos
let cantidadProductos = prompt("¿Cuántos productos desea agregar?");

// Un ciclo "for" que se ejecutará "cantidadProductos" veces por la cantidad de productos ingresados por el usuario
for (let i = 1; i <= cantidadProductos; i++) {
  // Pedir al usuario el precio del producto
  let precioProducto = prompt(`Ingrese el precio del producto ${i}:`); //Se utiliza la función "prompt()" para preguntarle al usuario el precio de cada producto. El mensaje incluye la variable "i" para indicarle al usuario qué número de producto está ingresando.

  // Calcular el total de la compra sumando el precio del producto actual al total acumulado
  total += parseFloat(precioProducto);//"parseFloat()" se utiliza para convertir el precio ingresado por el usuario (que se almacena como una cadena de texto) a un número decimal que se puede sumar correctamente.
}

// Preguntar al usuario si es nuevo
let esNuevo = prompt("¿Es usted un usuario nuevo? (Sí o No)").toLowerCase();//El resultado se guarda en la variable "esNuevo" en minúsculas para evitar problemas con mayúsculas y minúsculas en la comparación posterior

// Aplicar el descuento si el usuario es nuevo
if (esNuevo === "sí" || esNuevo === "si") {
  descuento = total * 0.2;//se calcula el descuento como el 20% del total acumulado 
  total -= descuento;//y se resta del total.
  alert("¡Felicidades! Usted ha ganado un 20% de descuento como usuario nuevo.");
}

// Aplicar el IVA
iva = total * PORCENTAJE_IVA;

// Si la compra es mayor a 2 productos, el envío es gratis
if (cantidadProductos > 2) {
  total += 0;
  alert("¡Felicidades! Usted ha ganado envío gratis por comprar más de 2 productos.");
}

// Calcular el total a pagar sumando el IVA al total acumulado
total += iva;

// Mostrar el total, el descuento y el IVA
alert(`El total a pagar es: ${total}. Se aplicó un descuento de: ${descuento}. El IVA es: ${iva}`);