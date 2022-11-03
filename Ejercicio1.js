function todolista(){
    const lis=document.querySelectorAll('ol li');
    for (let i=0; i<lis.length; i++){
        document.querySelector('.ordenada').innerHTML+=`${lis[i].innerText}<br>`;
    }            
}

function parimpar(){
    const lispar=document.querySelectorAll('ol li:nth-child(even)');
    for(let i=0;i<lispar.length;i++){
        document.querySelector('.ordenada').innerHTML+=`${lispar[i].innerText}<br>`;
    }

     const lisimpar=document.querySelectorAll('ol li:nth-child(odd)');
     for(let j=0;j<lisimpar.length;j++){
         document.querySelector('.ordenada').innerHTML+=`${lisimpar[j].innerText}<br>`;
     }

}

function elementoli(){
    const lis=document.querySelectorAll('li');
    for (let i=0; i<lis.length; i++){
        document.querySelector('.ordenada').innerHTML+=`${lis[i].innerText}<br>`;
    }    
}

function fila4ordenada(){
    const lis=document.querySelectorAll('ol li:nth-child(4');
    for(let i=0;i<lis.length;i++){
        document.querySelector('.ordenada').innerHTML+=`${lis[i].innerText}<br>`;
    }
}

function dosultimosli(){
    const lis=document.querySelectorAll('li:nth-last-child(-n+2)');
    for(let i=0;i<lis.length;i++){
        document.querySelector('.ordenada').innerHTML+=`${lis[i].innerText}<br>`
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const boton1= document.querySelector('#boton1');
    const boton2=document.querySelector('#boton2');
    const boton3=document.querySelector('#boton3');
    const boton4=document.querySelector('#boton4');
    const boton5=document.querySelector('#boton5');
    boton1.addEventListener("click", todolista);
    boton2.addEventListener("click",parimpar);
    boton3.addEventListener("click",elementoli);
    boton4.addEventListener("click",fila4ordenada);
    boton5.addEventListener("click",dosultimosli);
});