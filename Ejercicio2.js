function consola(){
    const mostrar=document.querySelectorAll('ol li');
    for (let i = 0; i < mostrar.length; i++) {
       mostrar [i].addEventListener('click', (evt) => {
        console.log(evt.target.innerText);
       });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const lis=document.querySelector('.ordenada');
    lis.addEventListener("click",consola);
});