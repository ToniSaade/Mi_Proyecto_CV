/** 
document.getElementById("botón").onclick = function () { //getelementbyid para seleccionar el elemento html con el que vamos a trabajar, y evento onclick para que algo suceda cuando presionemos el boton
    console.log("Acabaste de presenciar un evento en JS");
    document.getElementById("párrafo").innerHTML = "El texto ha cambiado"; //obtener el elemento párrafo para cuando hagamos click en el botón, el texto de este cambie al que se muestra aquí
}
*/

//Haremos lo mismo, pero con el Event Listener:

document.getElementById("botón").addEventListener("click", function (){
    console.log("Acabas de presenciar un evento en js mediante un event listener");
    document.getElementById("párrafo").innerHTML = "El texto ha cambiado";
})

/**Ahora haremos lo mismo pero con un botón para cambiar el color de fondo de la página (haciendo
ver que con js también podemos cambiar propiedades CSS)*/

document.getElementById("botón_color").addEventListener("click", function(){
    console.log("Acabas de cambiar el color de fondo de página a rojo")
    document.body.style.backgroundColor = '#FF0000';
})

//Cambiar el color de fondo al original

document.getElementById("botón_default").addEventListener("click", function(){
    console.log("el color de la página ha vuelto al original")
    document.body.style.backgroundColor = 'blue';
})

//Ocultar el texto (js también puede ocultar elementos html)

document.getElementById("botón_ocultar").addEventListener("click", function(){
    console.log("El texto se ha ocultado")
    document.getElementById("párrafo").style.display = 'none';
})

const collection = document.getElementsByClassName("ejemplo");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor =  'green';
}