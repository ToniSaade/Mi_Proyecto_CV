//La sentencia break lo que hace es detener la iteración de un ciclo dada una cierta condición. Ejemplo:

var x = 10;

for (x; x > 0; x--) {
    if (x == 5) {
        break;
    }
    console.log ("Mi variable vale:" +x); //sentencia
}

//También existe la sentencia "continue" que hace lo contrario, dada una condición, si se cumple, 
//continua el bucle.