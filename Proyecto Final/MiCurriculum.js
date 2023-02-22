//Para ocultar y mostrar la información de la sección de experiencia laboral

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

//Para mostrar y ocultar información de la sección de atributos personales

document.getElementById("Botón_Mostrar4").addEventListener("click", function(){
    document.getElementById("Real").style.display = "block";
    document.getElementById("Botón_Mostrar4").style.display = "none";
    document.getElementById("Botón_Ocultar4").style.display = "block";
    console.log("Se muestra el texto");
    document.getElementById("Botón_Ocultar4").addEventListener("click", function(){
        document.getElementById("Real").style.display = "none";
        document.getElementById("Botón_Mostrar4").style.display = "block";
        document.getElementById("Botón_Ocultar4").style.display = "none";
        console.log("Se oculta el texto");
    }) 
})

document.getElementById("Botón_Mostrar5").addEventListener("click", function(){
    document.getElementById("Hon").style.display = "block";
    document.getElementById("Botón_Mostrar5").style.display = "none";
    document.getElementById("Botón_Ocultar5").style.display = "block";
    console.log("Se muestra el texto");
    document.getElementById("Botón_Ocultar5").addEventListener("click", function(){
        document.getElementById("Hon").style.display = "none";
        document.getElementById("Botón_Mostrar5").style.display = "block";
        document.getElementById("Botón_Ocultar5").style.display = "none";
        console.log("Se oculta el texto");
    }) 
})

document.getElementById("Botón_Mostrar6").addEventListener("click", function(){
    document.getElementById("Op").style.display = "block";
    document.getElementById("Botón_Mostrar6").style.display = "none";
    document.getElementById("Botón_Ocultar6").style.display = "block";
    console.log("Se muestra el texto");
    document.getElementById("Botón_Ocultar6").addEventListener("click", function(){
        document.getElementById("Op").style.display = "none";
        document.getElementById("Botón_Mostrar6").style.display = "block";
        document.getElementById("Botón_Ocultar6").style.display = "none";
        console.log("Se oculta el texto");
    }) 
})

document.getElementById("Botón_Mostrar7").addEventListener("click", function(){
    document.getElementById("Ded").style.display = "block";
    document.getElementById("Botón_Mostrar7").style.display = "none";
    document.getElementById("Botón_Ocultar7").style.display = "block";
    console.log("Se muestra el texto");
    document.getElementById("Botón_Ocultar7").addEventListener("click", function(){
        document.getElementById("Ded").style.display = "none";
        document.getElementById("Botón_Mostrar7").style.display = "block";
        document.getElementById("Botón_Ocultar7").style.display = "none";
        console.log("Se oculta el texto");
    }) 
})

//Para mostrar y ocultar el menú desplegable de ajustes de la página

document.getElementById("Opciones").addEventListener("click", function(){
    document.getElementById("Opciones2").style.display = "block";
    document.getElementById("Opciones").style.display = "none";
    document.getElementById("Menú_Desplegable").style.display = "block";
    console.log("Muestra menú desplegable");
    document.getElementById("Opciones2").addEventListener("click", function(){
        document.getElementById("Menú_Desplegable").style.display = "none";
        document.getElementById("Opciones2").style.display = "none";
        document.getElementById("Opciones").style.display = "block";
        console.log("Se oculta el menú");
    })
})

//Para cambiar el modo de visualización de la página (claro y oscuro)

document.getElementById("Modo_Oscuro").addEventListener("click", function(){
    document.getElementById("Modo_Claro").style.display = "block";
    document.getElementById("Modo_Oscuro").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.getElementById("TítuloPágina").style.border = "lightblue 5px solid";
    document.body.style.color = "white";
    document.getElementById("TítuloPágina").style.backgroundColor = "black";
    document.getElementById("Botón_Mostrar1").style.backgroundColor = "black"; document.getElementById("Botón_Mostrar1").style.color = "blue";
    document.getElementById("Botón_Ocultar1").style.backgroundColor = "black"; document.getElementById("Botón_Ocultar1").style.color = "blue";
    document.getElementById("Botón_Mostrar2").style.backgroundColor = "black"; document.getElementById("Botón_Mostrar2").style.color = "blue";
    document.getElementById("Botón_Ocultar2").style.backgroundColor = "black"; document.getElementById("Botón_Ocultar2").style.color = "blue";
    document.getElementById("Botón_Mostrar3").style.backgroundColor = "black"; document.getElementById("Botón_Mostrar3").style.color = "blue";
    document.getElementById("Botón_Ocultar3").style.backgroundColor = "black"; document.getElementById("Botón_Ocultar3").style.color = "blue";
    console.log("Modo Oscuro activado");
    document.getElementById("Modo_Claro").addEventListener("click", function(){
        document.getElementById("Modo_Claro").style.display = "none";
        document.getElementById("Modo_Oscuro").style.display = "block";
        document.body.style.backgroundColor = "White";
        document.getElementById("TítuloPágina").style.border = "black 5px solid";
        document.body.style.color = "black";
        document.getElementById("TítuloPágina").style.backgroundColor = "chocolate";
        document.getElementById("Botón_Mostrar1").style.backgroundColor = "lightgray"; document.getElementById("Botón_Mostrar1").style.color = "black";
        document.getElementById("Botón_Ocultar1").style.backgroundColor = "lightgray"; document.getElementById("Botón_Ocultar1").style.color = "black";
        document.getElementById("Botón_Mostrar2").style.backgroundColor = "lightgray"; document.getElementById("Botón_Mostrar2").style.color = "black";
        document.getElementById("Botón_Ocultar2").style.backgroundColor = "lightgray"; document.getElementById("Botón_Ocultar2").style.color = "black";
        document.getElementById("Botón_Mostrar3").style.backgroundColor = "lightgray"; document.getElementById("Botón_Mostrar3").style.color = "black";
        document.getElementById("Botón_Ocultar3").style.backgroundColor = "lightgray"; document.getElementById("Botón_Ocultar3").style.color = "black";
        console.log("Modo Claro activado");
    })
})

//Traducción entre inglés y español

document.getElementById("Cambiar_Inglés").addEventListener("click", function(){
    document.getElementById("Cambiar_Español").style.display = "block";
    document.getElementById("Cambiar_Inglés").style.display = "none";
    document.getElementById("Campo0Es").style.display = "none";
    document.getElementById("Campo0En").style.display = "block";
    document.getElementById("Campo1Es").style.display = "none";
    document.getElementById("Campo1En").style.display = "block";
    document.getElementById("Campo2Es").style.display = "none";
    document.getElementById("Campo2En").style.display = "block";
    document.getElementById("Campo3Es").style.display = "none";
    document.getElementById("Campo3En").style.display = "block";
    document.getElementById("Campo4Es").style.display = "none";
    document.getElementById("Campo4En").style.display = "block";
    document.getElementById("Campo5Es").style.display = "none";
    document.getElementById("Campo5En").style.display = "block";
    document.getElementById("Campo6Es").style.display = "none";
    document.getElementById("Campo6En").style.display = "block";
    document.getElementById("Campo7Es").style.display = "none";
    document.getElementById("Campo7En").style.display = "block";
    document.getElementById("Campo8Es").style.display = "none";
    document.getElementById("Campo8En").style.display = "block";
    document.getElementById("Campo9Es").style.display = "none";
    document.getElementById("Campo9En").style.display = "block";
    document.getElementById("Campo10Es").style.display = "none";
    document.getElementById("Campo10En").style.display = "block";
    document.getElementById("Campo11Es").style.display = "none";
    document.getElementById("Campo11En").style.display = "block";
    document.getElementById("Campo12Es").style.display = "none";
    document.getElementById("Campo12En").style.display = "block";
    document.getElementById("Campo13Es").style.display = "none";
    document.getElementById("Campo13En").style.display = "block";
    document.getElementById("Campo14Es").style.display = "none";
    document.getElementById("Campo14En").style.display = "block";
    document.getElementById("Campo15Es").style.display = "none";
    document.getElementById("Campo15En").style.display = "block";
    document.getElementById("Campo16Es").style.display = "none";
    document.getElementById("Campo16En").style.display = "block";
    document.getElementById("Campo17Es").style.display = "none";
    document.getElementById("Campo17En").style.display = "block";
    document.getElementById("Campo18Es").style.display = "none";
    document.getElementById("Campo18En").style.display = "block";
    document.getElementById("Campo19Es").style.display = "none";
    document.getElementById("Campo19En").style.display = "block";
    document.getElementById("Campo20Es").style.display = "none";
    document.getElementById("Campo20En").style.display = "block";
    document.getElementById("Campo21Es").style.display = "none";
    document.getElementById("Campo21En").style.display = "block";
    document.getElementById("Campo22Es").style.display = "none";
    document.getElementById("Campo22En").style.display = "block";
    document.getElementById("Campo23Es").style.display = "none";
    document.getElementById("Campo23En").style.display = "block";
    document.getElementById("Acerca").style.display = "none";
    document.getElementById("Acerca_En").style.display = "block";
    document.getElementById("Experiencia").style.display = "none";
    document.getElementById("Experiencia_En").style.display = "block";
    document.getElementById("CursosRealizados").style.display = "none";
    document.getElementById("CursosRealizados_En").style.display = "block";
    document.getElementById("Botón_Ocultar1").innerHTML = "Hide this information";
    document.getElementById("Botón_Mostrar1").innerHTML = "Show this information";
    document.getElementById("Botón_Ocultar2").innerHTML = "Hide this information";
    document.getElementById("Botón_Mostrar2").innerHTML = "Show this information";
    document.getElementById("Botón_Ocultar3").innerHTML = "Hide this information";
    document.getElementById("Botón_Mostrar3").innerHTML = "Show this information";
    document.getElementById("Botón_Ocultar4").innerHTML = "Show less";
    document.getElementById("Botón_Mostrar4").innerHTML = "Show more";
    document.getElementById("Botón_Ocultar5").innerHTML = "Show less";
    document.getElementById("Botón_Mostrar5").innerHTML = "Show more";
    document.getElementById("Botón_Ocultar6").innerHTML = "Show less";
    document.getElementById("Botón_Mostrar6").innerHTML = "Show more";
    document.getElementById("Botón_Ocultar7").innerHTML = "Show less";
    document.getElementById("Botón_Mostrar7").innerHTML = "Show more";
    document.getElementById("L1").innerHTML = "Realist";
    document.getElementById("L2").innerHTML = "Honesty";
    document.getElementById("L3").innerHTML = "Optimism";
    document.getElementById("L4").innerHTML = "Dedication";
    document.getElementById("Atributes").innerHTML = "PERSONAL ATRIBUTES";
    document.getElementById("Real").innerHTML = "Person who is aware that things are as they are and that risks exist, which allows him to take advantage of available resources while being prepared to face the risks that arise.";
    document.getElementById("Hon").innerHTML = "Person who, when he acts, always does so supported by values such as truth and justice, and does not put his own needs or interests before them. In this sense, he is a person attached to a code of conduct characterized by rectitude, probity and honesty.";
    document.getElementById("Op").innerHTML = "Confident, hopeful and positive person who always believes that everything can work in his life, no matter what. In other words, even if he can go through situations of great difficulty, he can believe that there will always be a solution for everything."
    document.getElementById("Ded").innerHTML = "He stands out for being committed to what he proposes 24 hours a day, and if this implies that he stops doing anything else if that activity demands it, he will do it in order to fulfill it satisfactorily."
    console.log("Now the web page is in english");
    document.getElementById("Cambiar_Español").addEventListener("click", function(){
        document.getElementById("Cambiar_Inglés").style.display = "block";
        document.getElementById("Cambiar_Español").style.display = "none";
        document.getElementById("Campo0Es").style.display = "block";
        document.getElementById("Campo0En").style.display = "none";
        document.getElementById("Campo1Es").style.display = "block";
        document.getElementById("Campo1En").style.display = "none";
        document.getElementById("Campo2Es").style.display = "block";
        document.getElementById("Campo2En").style.display = "none";
        document.getElementById("Campo3Es").style.display = "block";
        document.getElementById("Campo3En").style.display = "none";
        document.getElementById("Campo4Es").style.display = "block";
        document.getElementById("Campo4En").style.display = "none";
        document.getElementById("Campo5Es").style.display = "block";
        document.getElementById("Campo5En").style.display = "none";
        document.getElementById("Campo6Es").style.display = "block";
        document.getElementById("Campo6En").style.display = "none";
        document.getElementById("Campo7Es").style.display = "block";
        document.getElementById("Campo7En").style.display = "none";
        document.getElementById("Campo8Es").style.display = "block";
        document.getElementById("Campo8En").style.display = "none";
        document.getElementById("Campo9Es").style.display = "block";
        document.getElementById("Campo9En").style.display = "none";
        document.getElementById("Campo10Es").style.display = "block";
        document.getElementById("Campo10En").style.display = "none";
        document.getElementById("Campo11Es").style.display = "block";
        document.getElementById("Campo11En").style.display = "none";
        document.getElementById("Campo12Es").style.display = "block";
        document.getElementById("Campo12En").style.display = "none";
        document.getElementById("Campo13Es").style.display = "block";
        document.getElementById("Campo13En").style.display = "none";
        document.getElementById("Campo14Es").style.display = "block";
        document.getElementById("Campo14En").style.display = "none";
        document.getElementById("Campo15Es").style.display = "block";
        document.getElementById("Campo15En").style.display = "none";
        document.getElementById("Campo16Es").style.display = "block";
        document.getElementById("Campo16En").style.display = "none";
        document.getElementById("Campo17Es").style.display = "block";
        document.getElementById("Campo17En").style.display = "none";
        document.getElementById("Campo18Es").style.display = "block";
        document.getElementById("Campo18En").style.display = "none";
        document.getElementById("Campo19Es").style.display = "block";
        document.getElementById("Campo19En").style.display = "none";
        document.getElementById("Campo20Es").style.display = "block";
        document.getElementById("Campo20En").style.display = "none";
        document.getElementById("Campo21Es").style.display = "block";
        document.getElementById("Campo21En").style.display = "none";
        document.getElementById("Campo22Es").style.display = "block";
        document.getElementById("Campo22En").style.display = "none";
        document.getElementById("Campo23Es").style.display = "block";
        document.getElementById("Campo23En").style.display = "none";
        document.getElementById("Acerca").style.display = "block";
        document.getElementById("Acerca_En").style.display = "none";
        document.getElementById("Experiencia").style.display = "block";
        document.getElementById("Experiencia_En").style.display = "none";
        document.getElementById("CursosRealizados").style.display = "block";
        document.getElementById("CursosRealizados_En").style.display = "none";
        document.getElementById("Botón_Ocultar1").innerHTML = "Ocultar esta información";
        document.getElementById("Botón_Mostrar1").innerHTML = "Mostrar esta información";
        document.getElementById("Botón_Ocultar2").innerHTML = "Ocultar esta información";
        document.getElementById("Botón_Mostrar2").innerHTML = "Mostrar esta información";
        document.getElementById("Botón_Ocultar3").innerHTML = "Ocultar esta información";
        document.getElementById("Botón_Mostrar3").innerHTML = "Mostrar esta información";
        document.getElementById("Botón_Ocultar4").innerHTML = "Mostrar menos";
        document.getElementById("Botón_Mostrar4").innerHTML = "Mostrar más";
        document.getElementById("Botón_Ocultar5").innerHTML = "Mostrar menos";
        document.getElementById("Botón_Mostrar5").innerHTML = "Mostrar más";
        document.getElementById("Botón_Ocultar6").innerHTML = "Mostrar menos";
        document.getElementById("Botón_Mostrar6").innerHTML = "Mostrar más";
        document.getElementById("Botón_Ocultar7").innerHTML = "Mostrar menos";
        document.getElementById("Botón_Mostrar7").innerHTML = "Mostrar más";
        document.getElementById("L1").innerHTML = "Realista";
        document.getElementById("L2").innerHTML = "Honestidad";
        document.getElementById("L3").innerHTML = "Optimismo";
        document.getElementById("L4").innerHTML = "Dedicación";
        document.getElementById("Atributes").innerHTML = "ATRIBUTOS PERSONALES";
        document.getElementById("Real").innerHTML = "Persona que es consciente de que las cosas son como son y de que los riesgos existen, lo cual le permite aprovechar los recursos disponibles a la vez que estar preparado para afrontar los riesgos que surjan."
        document.getElementById("Hon").innerHTML = "Persona que, cuando actúa, lo hace siempre apoyada en valores como la verdad y la justicia, y no antepone a estos sus propias necesidades o intereses. En este sentido, es una persona apegada a un código de conducta caracterizado por la rectitud, la probidad y la honradez."
        document.getElementById("Op").innerHTML = "Persona confiada, esperanzada y positiva que siempre cree que todo puede funcionar en su vida, pase lo que pase. En otras palabras, incluso si puede pasar por situaciones de gran dificultad, puede creer que siempre habrá una solución para todo."
        document.getElementById("Ded").innerHTML = "Se destaca por estar comprometido con lo que se proponga las 24 hrs del día, y si ello implica que deje de hacer cualquier otra cosa si es que esa actividad se lo exige, lo hará con tal de cumplirla satisfactoriamente."
        console.log("Ahora la página web está en español");
    })
})