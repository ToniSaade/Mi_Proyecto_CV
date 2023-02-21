//FUNCIONES: es un elemento el cual tiene una entrada y una salida, generando en el medio una 
//transformación.

//A continuación, un ejemplo con la función HolaMundo:

function HolaMundo() {
    console.log ("Hola Mundo!");
}

//Podremos invocar esta función las veces que sean necesarias. Esto nos permite no tener que repetir
//el mismo código una y otra vez.

HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();
HolaMundo();

//Ahora, un ejemplo con la función suma

function sumar(a,b) {
    return a+b;
}

suma = sumar(3,4);
console.log(suma);

suma2 = sumar(5,7);
console.log(suma2);

suma3 = sumar(87,30);
console.log(suma3);