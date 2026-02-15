// Click cambia a negro

const ids = ["azul","rojo","verde","amarillo"];

ids.forEach(id => {
    const div = document.getElementById(id);

    div.addEventListener("click", function(){
        div.style.backgroundColor = "black";
    });
});

// función para crear divs nuevos
function crearDiv(color){
    const nuevoDiv = document.createElement("div");

    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;

    document.body.appendChild(nuevoDiv);
}

// Variable global de color

let colorGlobal = "";

//  Evento teclado
document.addEventListener("keydown", function(event){

    const keyDiv = document.getElementById("key");

    // cambiar color del div key
    if(event.key === "a"){
        colorGlobal = "pink";
        keyDiv.style.backgroundColor = colorGlobal;

    } else if(event.key === "s"){
        colorGlobal = "orange";
        keyDiv.style.backgroundColor = colorGlobal;

    } else if(event.key === "d"){
        colorGlobal = "skyblue";
        keyDiv.style.backgroundColor = colorGlobal;
    }

    // crear nuevos divs
    else if(event.key === "q"){
        crearDiv("purple");
    }
    else if(event.key === "w"){
        crearDiv("gray");
    }
    else if(event.key === "e"){
        crearDiv("brown");
    }

});

