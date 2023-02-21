document.getElementById("Botón_Ocultar1").addEventListener("click", function(){
    document.getElementById("Info1").style.display = "none";
    document.getElementById("Botón_Ocultar1").style.display = "none";
    document.getElementById("Botón_Mostrar1").style.display = "block";
    console.log("Se ha ocultado el texto");
    document.getElementById("Botón_Mostrar1").addEventListener("click", function(){
        document.getElementById("Info1").style.display = "block";
        document.getElementById("Botón_Ocultar1").style.display = "block";
        document.getElementById("Botón_Mostrar1").style.display = "none";
        console.log("Se vuelve a mostrar el texto");
    }) 
})

document.getElementById("Botón_Ocultar2").addEventListener("click", function(){
    document.getElementById("Info2").style.display = "none";
    document.getElementById("Botón_Ocultar2").style.display = "none";
    document.getElementById("Botón_Mostrar2").style.display = "block";
    console.log("Se ha ocultado el texto");
    document.getElementById("Botón_Mostrar2").addEventListener("click", function(){
        document.getElementById("Info2").style.display = "block";
        document.getElementById("Botón_Ocultar2").style.display = "block";
        document.getElementById("Botón_Mostrar2").style.display = "none";
        console.log("Se vuelve a mostrar el texto");
    }) 
})

document.getElementById("Botón_Ocultar3").addEventListener("click", function(){
    document.getElementById("Info3").style.display = "none";
    document.getElementById("Botón_Ocultar3").style.display = "none";
    document.getElementById("Botón_Mostrar3").style.display = "block";
    console.log("Se ha ocultado el texto");
    document.getElementById("Botón_Mostrar3").addEventListener("click", function(){
        document.getElementById("Info3").style.display = "block";
        document.getElementById("Botón_Ocultar3").style.display = "block";
        document.getElementById("Botón_Mostrar3").style.display = "none";
        console.log("Se vuelve a mostrar el texto");
    }) 
})

document.getElementById("Botón_Mostrar4").addEventListener("click", function(){
    document.getElementById("Res").style.display = "block";
    document.getElementById("Botón_Mostrar4").style.display = "none";
    document.getElementById("Botón_Ocultar4").style.display = "block";
    console.log("Se muestra el texto");
    document.getElementById("Botón_Ocultar4").addEventListener("click", function(){
        document.getElementById("Res").style.display = "none";
        document.getElementById("Botón_Mostrar4").style.display = "block";
        document.getElementById("Botón_Ocultar4").style.display = "none";
        console.log("Se oculta el texto");
    }) 
})

document.getElementById("boton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    console.log("Se ha cambiado al modo oscuro");
})