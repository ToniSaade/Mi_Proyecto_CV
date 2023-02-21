document.getElementById("Esconder").addEventListener("click", function(){
    document.getElementById("DefSuma").style.display = "none";
    document.getElementById("Esconder").style.display = "none";
    document.getElementById("Revelar").style.display = "block";
    console.log("Se ha ocultado el texto");
    document.getElementById("Revelar").addEventListener("click", function(){
        document.getElementById("DefSuma").style.display = "block";
        document.getElementById("Esconder").style.display = "block";
        document.getElementById("Revelar").style.display = "none";
        console.log("Se vuelve a mostrar el texto");
    }) 
})

document.getElementById("Sumar").addEventListener("click", function(){
    let numeroA = document.getElementById("Numero1").value;
    console.log("El valor del numero A es:"+numeroA);
    let numeroB = document.getElementById("Numero2").value;
    console.log("El valor del numero B es:"+numeroB);
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log("El resultado de la suma es:"+resultado);

    document.getElementById("Resultado").innerHTML = resultado;
    document.getElementById("ContenedorResultado").style.display = "block";
})

document.getElementById("Multiplicar").addEventListener("click", function(){
    let numeroC = document.getElementById("Numero3").value;
    console.log("El valor del numero C es:"+numeroC);
    let numeroD = document.getElementById("Numero4").value;
    console.log("El valor del numero D es:"+numeroD);
    let resultado2 = multiplicar(parseInt(numeroC), parseInt(numeroD));
    console.log("El resultado de la multiplicación es:"+resultado2);

    document.getElementById("Resultado2").innerHTML = resultado2;
    document.getElementById("ContenedorResultado2").style.display = "block";
})

function sumar(a,b){
    return a + b;
}

function multiplicar(c,d){
    return c*d;
}