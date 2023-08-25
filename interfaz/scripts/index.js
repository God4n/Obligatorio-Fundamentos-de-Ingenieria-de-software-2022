import Grupo from "../../dominio/grupo.mjs";
import Equipo from "../../dominio/equipo.mjs";
import Partido from "../../dominio/partido.mjs";
import Sistema from "../../dominio/sistema.mjs";
import * as idatos from "../../datos/insertarDatos.js";

document.getElementById("grupos-tab").style.display="none";
document.getElementById("fixture-tab").style.display="none";
document.getElementById("inicio-tab").style.display="block";
document.getElementById("perfil-tab").style.display="none";
document.getElementById("ajustes-tab").style.display="none";
document.getElementById("dialogo").style.display="none";

import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

import {MDCTopAppBar} from '@material/top-app-bar';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

import {MDCDialog} from '@material/dialog';
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

// tabs inferiores
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.activateTab(2);
tabBar.listen("MDCTabBar:activated", function(event) {
  let index = event.detail.index; // Var que guarda el indice de la tab seleccionada
  if(index === 0){
    document.getElementById("grupos-tab").style.display="block";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 1){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="block";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 2){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="block";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 3){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="block";
    document.getElementById("ajustes-tab").style.display="none";
  }
  if(index === 4){
    document.getElementById("grupos-tab").style.display="none";
    document.getElementById("fixture-tab").style.display="none";
    document.getElementById("inicio-tab").style.display="none";
    document.getElementById("perfil-tab").style.display="none";
    document.getElementById("ajustes-tab").style.display="block";
  }
});

let sis = new Sistema();

window.addEventListener("load",datosPrecargados);

function datosPrecargados(){
  //document.getElementById("bodyTabla").innerHTML = "";
  let g1 = new Grupo("Shawarma",7,7,true,"Manuwu");
  let g2 = new Grupo("Morbius Group",1,100,true,"Tadeus");
  let g3 = new Grupo("Fans de Messi",10568,30000,false,"Alfred");
  sis.agregarGrupo(g1);
  sis.agregarGrupo(g2);
  sis.agregarGrupo(g3);
  cargarTabla();
  
  idatos.insertarEquipos(sis);
  idatos.insertarPartidos(sis);

  cargarFixture();
  cargarCartasConPredicciones();

  document.getElementById("botonGrupos").addEventListener("click",desplegarDialogo);
  document.getElementById("cerrarDialogo").addEventListener("click",cerrarDialogo);
  document.getElementById("aceptarDialogo").addEventListener("click",agregarGrupo);
  document.getElementById("cerrarPrediccion").addEventListener("click",cerrarPrediccion);
  document.getElementById("aceptarPrediccion").addEventListener("click",function(){
    agregarPrediccion(document.getElementById("localPred").textContent, document.getElementById("visPred").textContent);
  });

  cargarEventoPrediccion();
}

function cargarEventoPrediccion(){
  document.getElementById("predict-1").addEventListener("click",partidoComenzado);
  for(let i = 2; i <= 16; i++){
    let identificacion = "predict-" + i;
    document.getElementById(identificacion).addEventListener("click",function(){ 
      desplegarPrediccion(parseInt(identificacion.split('-')[1]));
    });
  }
}

function partidoComenzado(){
  alert("No se puede modificar predicción de un partido que ya inició 🙁");
}

function cargarTabla(){
  document.getElementById("bodyTabla").innerHTML = "";
  let lista = sis.getGrupos();
  for(let i = 0; i < lista.length; i++){
    let h = document.createElement('th');
    let text1 = document.createTextNode(lista[i].nombre);
    h.appendChild(text1);
    let d1 = document.createElement('td');
    let text2 = document.createTextNode(lista[i].participantes + "/" + lista[i].maximo);
    d1.appendChild(text2);
    let d2 = document.createElement('td');
    let text3 = document.createTextNode(lista[i].lider);
    d2.appendChild(text3);
    let r = document.createElement('tr');
    r.classList.add("mdc-data-table__row");
    r.appendChild(h);
    r.appendChild(d1); 
    r.appendChild(d2);
    document.getElementById("bodyTabla").appendChild(r);

  }
}

function cargarFixture(){
  let lista = sis.getPartidos();
  let fecha = lista[0].fecha;
  for(let i = 1; i < lista.length; i++){
    if(fecha != lista[i].fecha){
      let a = document.createElement('a');
      a.classList.add("fecha");
      let fec = document.createTextNode(lista[i].fecha);
      a.appendChild(fec);
      document.getElementById("partidos").appendChild(a);
      fecha = lista[i].fecha;
    }

    let card = document.createElement('div');
    card.classList.add("mdc-card-partido");
    let inter = document.createElement('div');
    inter.classList.add("fixture-partido-equipos");
    let im1 = document.createElement('img');
    im1.src = sis.devolverEquipo(lista[i].local).escudo;
    let a = document.createElement('a');
    let vs = document.createTextNode("vs");
    a.classList.add("vs");
    a.appendChild(vs);
    let im2 = document.createElement('img');
    im2.src = sis.devolverEquipo(lista[i].visitante).escudo;
    let bot = document.createElement('button');
    bot.classList.add("mdc-button");
    bot.classList.add("mdc-button--raised");
    bot.classList.add("mdc-button--leading");
    bot.id = "btnHora";
    let rip = document.createElement('span');
    rip.classList.add("mdc-button__ripple");
    let ielem = document.createElement('i');
    ielem.classList.add("material-icons");
    ielem.classList.add("mdc-button__icon");
    ielem.setAttribute("aria-hidden", "true");
    let check = document.createTextNode("notifications");
    ielem.appendChild(check);
    let span = document.createElement('span');
    span.classList.add("mdc-button__label");
    let hora = document.createTextNode(lista[i].hora);
    span.appendChild(hora);
    bot.appendChild(rip);
    bot.appendChild(ielem);
    bot.appendChild(span);
    inter.appendChild(im1);
    inter.appendChild(a);
    inter.appendChild(im2);
    inter.appendChild(bot);
    card.appendChild(inter);
    document.getElementById("partidos").appendChild(card);
  }
}

function cargarCartasConPredicciones(){
  let primerCard = `
    <div class="cards-de-a-2" id="0">
      <div class="mdc-card" id="predict-1">
        <h1>HOY, 20 Nov</h1>
        <button class="mdc-button mdc-button--raised mdc-button--leading" id="btnHorarioLive">
          <span class="mdc-button__ripple"></span>
          <i class="material-icons mdc-button__icon" aria-hidden="true">radio_button_checked</i>
          <span class="mdc-button__label">Live</span>
        </button>
        <div class="carta-partido-equipos">
          <img src="https://paladarnegro.net/escudoteca/selecciones/selecciones/img/qatar.jpg">
          <a class="vs">vs</a>
          <img src="https://paladarnegro.net/escudoteca/selecciones/selecciones/img/ecuador.jpg">
        </div>
        <h3>Tu Predicción:</h3>
        <h2>0 - 0</h2>
      </div>
    </div>
  `;

  document.getElementById("Predicciones_").innerHTML = primerCard;
  let lista = sis.getPartidos();
  let cont = 1;
  let ult = 0;
  for(let i = 1; i < lista.length; i++){
    let card = document.createElement('div');
    card.classList.add("mdc-card");
    card.id = "predict-"+lista[i].id;
    let h1 = document.createElement('h1');
    let fecha = document.createTextNode(lista[i].fecha);
    h1.appendChild(fecha);
    let boton =  document.createElement('button');
    boton.setAttribute("class", "mdc-button mdc-button--raised mdc-button--leading");
    boton.id = "btnHorario";
    let rip = document.createElement('span');
    rip.classList.add("mdc-button__ripple"); 
    let ielem = document.createElement('i');
    ielem.classList.add("material-icons");
    ielem.classList.add("mdc-button__icon");
    ielem.setAttribute("aria-hidden", "true");
    let check = document.createTextNode("notifications");
    let span = document.createElement('span');
    span.classList.add("mdc-button__label");
    let hora = document.createTextNode(lista[i].hora);
    let inter = document.createElement('div');
    inter.classList.add("carta-partido-equipos");
    let im1 = document.createElement('img');
    im1.src = sis.devolverEquipo(lista[i].local).escudo;
    let a = document.createElement('a');
    let vs = document.createTextNode("vs");
    a.classList.add("vs");
    a.appendChild(vs);
    let im2 = document.createElement('img');
    im2.src = sis.devolverEquipo(lista[i].visitante).escudo;
    inter.appendChild(im1);
    inter.appendChild(a);
    inter.appendChild(im2);
    let h3 = document.createElement('h3');
    let text = document.createTextNode("Tu Predicción:");
    h3.appendChild(text);
    let h2 = document.createElement('h2');
    let prediccion = document.createTextNode(darResultado(lista[i].predLocal) + " - " + darResultado(lista[i].predVis));
    h2.appendChild(prediccion);
    h2.id = "prediccion";
    card.appendChild(h1);
    card.appendChild(boton);
    boton.appendChild(rip);
    ielem.appendChild(check);
    boton.appendChild(ielem);
    span.appendChild(hora);
    boton.appendChild(span);
    card.appendChild(inter);
    card.appendChild(h3);
    card.appendChild(h2);
    if(cont == 0){
      let div = document.createElement('div');
      div.classList.add("cards-de-a-2");
      div.id = i;
      div.appendChild(card);
      document.getElementById("Predicciones_").appendChild(div);
      cont++;
      ult = i;
    }
    else if (cont < 2) {
      document.getElementById(ult).appendChild(card);
      cont = 0;
    }
    //document.getElementById("Predicciones_").appendChild(card);
    
  }
}

function darResultado(n){
  return (n < 0) ? "?" : n;
}

function cerrarDialogo(){
  document.getElementById("dialogo").style.display="none";
}

function desplegarDialogo(){
  document.getElementById("dialogo").style.display="block";
}

function agregarGrupo(){
  let nombre, max, priv;
  nombre = document.getElementById("nombreGrupo").value;
  max = document.getElementById("maxGrupo").value;
  let index = document.getElementById("grupoPrivPub").selectedIndex;
  priv = (index == 0) ? true : false;
  try {
    let gr = new Grupo(nombre, 1, max, priv, "Javier Milán");
    sis.agregarGrupo(gr);
    cargarTabla();
    document.getElementById("nombreGrupo").value = "";
    document.getElementById("maxGrupo").value = "";
    cerrarDialogo();
  }
  catch(e){
    alert("Valores inválidos: el nombre ya está en uso o la cantidad maxima de participantes no es válida.")
  }
}

function cerrarPrediccion(){
  document.getElementById("predict").style.display="none";
  document.getElementById("golLocal").value = 0;
  document.getElementById("golVis").value = 0;
}

function desplegarPrediccion(id){
  let partido = sis.devolverPartido(id);
  document.getElementById("predict").style.display="block";
  document.getElementById("localPred").innerHTML = partido.local;
  document.getElementById("visPred").innerHTML = partido.visitante;
}

function agregarPrediccion(eLoc, eVis){
  let local = document.getElementById("golLocal").value;
  let vis = document.getElementById("golVis").value;
  if(local < 0 || vis < 0 || local == "" || vis == ""){
    alert("⚠ Deben ser números mayores o iguales a 0");
  }
  else{
    let partido = sis.partidoPorParticipantes(eLoc, eVis);
    partido.setLocal(local);
    partido.setVis(vis);
    cerrarPrediccion();
    cargarCartasConPredicciones();
    cargarEventoPrediccion();
  }
}
