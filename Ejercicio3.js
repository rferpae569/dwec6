function cambiar(evt){
    evt.target.classList.toggle('clase');
}

window.addEventListener('DOMContentLoaded', () => {
    let elementos=document.querySelectorAll('li');
    console.log(elementos);
    for(let i=0;i<elementos.length;i++){
        elementos[i].innerText=`Elemento numero ${i+1}`;
        elementos[i].addEventListener("click",cambiar);
    }
});