function cambiar(evt){
    evt.target.classList.toggle('clase');
}

window.addEventListener('DOMContentLoaded', () => {
    let elementos=document.querySelectorAll('li').forEach((v,k)=>{
        console.log(v,k);
        v.innerText=`Elemento ${k+1} con foreach`;
        v.addEventListener("click",cambiar);
    })
});
