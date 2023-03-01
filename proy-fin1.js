
alert("Bienvenido!")


function habilitar(){

    text_1 = document.getElementById("txt-1").value;
    text_2 = document.getElementById("txt-2").value;
    email_1 = document.getElementById("txt-3").value;
    text_4 = document.getElementById("txt-4").value;
    val = 0;

    if(text_1 == ""){
        val++;
    }
    
    if(text_2 == ""){
        val++;
    }
    
    if(email_1 == ""){
        val++;
    }

    if(text_4 == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("botonenviar").disabled=false;
    }    
    else{    
        document.getElementById("botonenviar").disabled=true;
    }
}

document.getElementById("txt-1").addEventListener("keyup", habilitar);
document.getElementById("txt-2").addEventListener("keyup", habilitar);
document.getElementById("txt-3").addEventListener("keyup", habilitar);
document.getElementById("txt-4").addEventListener("keyup", habilitar);
document.getElementById("botonenviar").addEventListener('click',() =>{
    alert("Muchas gracias! Nos contactaremos a la brevedad");
});

