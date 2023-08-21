let preloader = document.getElementById("preloader");
    setTimeout(function(){
        preloader.style.opacity = "1";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
    },2000)

function llamar(){
    let botonera = document.getElementById("botonera");
         botonera.classList.toggle("botonera-open");
    let menu = document.getElementById("menu");
        menu.querySelector(".menu .bi-list").classList.toggle("bi-x-circle");
}

window.addEventListener("scroll",Scroll);
    function Scroll(){
        let subir=document.getElementById("subir");
        let posy=window.pageYOffset;
        if (posy>100) {
            subir.style.display="block";
        }
        else{
            subir.style.display="none";
        }
    }

let num = 1;
    function adelante(){
        num++;
        if(num>8)
        num = 1;
    let img = document.getElementById("img");
        img.src="img/"+"spa0"+num+".jpg";
    }

    function atras(){
        num--;
        if(num<=1)
        num = 8;
    let img = document.getElementById("img");
        img.src="img/"+"spa0"+num+".jpg";
    }

window.addEventListener("scroll",Scrollear);
function Scrollear(){
    let header=document.getElementById("header");
    let ejey=window.pageYOffset;
    if (ejey>300) {
        header.style.background="deeppink";
    } else {
        header.style.background="none";
    }
}