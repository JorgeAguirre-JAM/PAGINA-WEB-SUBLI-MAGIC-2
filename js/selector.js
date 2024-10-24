let productoa=["Playeras","Sudaderas","Tazas","Etiquetas adheribles","Llaveros","Pines","DTF","Vasos","Tarros satinados",];
let productob=[	"Polo","Cuello redondo","Cuello V","Manga larga","Deportiva","Sin mangas","Dryft","Con gorro y cangurera",
"Sin gorro y cuello redondo","Cierre y gorro","Clasicas","Metalicas","De color","De colores","Metro","Medio metro","Vasos magicos","Con popote","Termos Sport"];

let seleccionx=document.getElementById('seleccion-producto')
let selecciony=document.getElementById('seleccion-productob')

function Recorrer (seleccion,valores)
{
    selecciony.innerHTML=''

    for(let index of valores)
    {
        seleccion.innerHTML+=`<option>${index}</option>`
    }
}

function llenarselec(){
    Recorrer(seleccionx,productoa)

}

llenarselec()

seleccionx.addEventListener('change',(e)=>{
let dato=e.target.value
switch(dato){
     case'Playeras':
     Recorrer(selecciony,productob.slice(0,7))
     break;
     case'Sudaderas':
     Recorrer(selecciony,productob.slice(7,10))
     break;
     case'Tazas':
     Recorrer(selecciony,productob.slice(10,13))
     break;
     case'Tarros satinados':
     Recorrer(selecciony,productob.slice(13,14))
     break;
     case'DTF':
     Recorrer(selecciony,productob.slice(14,16))
     break;
     case'Vasos':
     Recorrer(selecciony,productob.slice(16,20))
     break;
     case'Llaveros':
     Recorrer(selecciony,productob.slice(21,22))
     break;
     case'Pines':
     Recorrer(selecciony,productob.slice(21,22))
     break;
     case'Etiquetas adheribles':
     Recorrer(selecciony,productob.slice(21,22))
     break;
}
})