let mosca = document.getElementById("mosca");
let contenedor = document.getElementById("contenedor");

const moverMosca=(event)=>{
    let posX=mosca.offsetLeft;
    let posY=mosca.offsetTop;
    if(event.keyCode==38 && posY>10){
        console.log("arriba");
        mosca.style.top= posY-10+"px";
    }
    if(event.keyCode==40 && posY<contenedor.clientHeight-mosca.clientHeight-10){
        console.log("abajo");
        mosca.style.top= posY+10+"px";
    }
    if(event.keyCode==39 &&  posX<contenedor.clientWidth-mosca.clientWidth-10){
        console.log("derecha");
        mosca.style.left= posX+10+"px";
    }
    if(event.keyCode==37 && posX>10){
        console.log("izquierda");
        mosca.style.left= posX-10+"px";
    }
}
document.addEventListener("keydown",moverMosca);