// Declaracion de Variables
var formulario = document.querySelector("#frmClave");
var nombre = document.querySelector('#nombre');
var apellido = document.querySelector('#apellido');
var dni = document.querySelector('#dni');
var fecha = document.querySelector('#fecha');
var btnEnviar = document.querySelector('#btnEnviar');
var claveGenerada = document.querySelector('#claveGenerada');


function gclave(evento) 
{
// Generación de clave
var FragmentodeClave = nombre.value.substring(0,2);
FragmentodeClave += apellido.value.substring(0,3);
FragmentodeClave += dni.value;
FragmentodeClave += fecha.value.substring(8);
FragmentodeClave += fecha.value.substring(3,5);
FragmentodeClave += fecha.value.substring(0,2);

claveGenerada.innerHTML = "Tu clave es:"+FragmentodeClave.toUpperCase();

    evento.preventDefault();
    alert ("Enviando Formulario");

}

function validar_campos(evento){
    
    var exprecionRegularDeNombre = /^([A-Z a-z]+[\s]*)+$/;
    var cualdato = evento.target;



    if(cualdato.id == "nombre" || cualdato.id == "apellido"){

        if(!exprecionRegularDeNombre.exec(cualdato.value))
            {
            alert('Escribi lo que se te pide');
            setTimeout(function(){
                cualdato.focus();
            },100);

            }
    }

}

function cargar_documento (){
    
    nombre.addEventListener("blur", validar_campos);
    apellido.addEventListener("blur", validar_campos);
    dni.addEventListener("blur", validar_campos);
    fecha.addEventListener("blur", validar_campos);  
    formulario.addEventListener("submit",gclave);
    
}


window.addEventListener("load",cargar_documento)