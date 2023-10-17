/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Primero dar las variables para que formen una frase.
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  // Segundo, necesito que me extraiga un dato de cada una de esas variable de forma aleatoria.
  //Recorro el array pronoun con un for y extraigo un elemento.
  // Luego, recorro el array adj y extraigo un elemento
  // y recorro el array noun y extraigo un elemento
  // Tengo que lograr esta salida:
  // 1 the great jogger
  // 2 the great racoon
  // 3 the big jogger
  // 4 the bg raccon
  // 5 our great jogger
  // 6 our great raccon
  // 7 our big jogger
  // 8 our big raccon

  // Creo una variable texto o string donde guardo el contenido

  let domainText = '<ul class="list-group">';
  for (const i in pronoun) {
    for (const j in adj) {
      for (const k in noun) {
        // Tercero, juntar esos datos random en una línea
        domainText +=
          '<li class="list-group-item">' +
          pronoun[i] +
          adj[j] +
          noun[k] +
          ".com</li>";
      }
    }
  }
  domainText += "</ul>";
  // Cuarto, mostrar en HTML.
  // Capturar en una variable el elemento cuyo selector de id es id="generadordominios"
  let domainGeneratorHTML = document.querySelector("#generadordominios");
  // Asignar al innerhtml el resultado de todos los dominios
  domainGeneratorHTML.innerHTML = domainText;
  console.log("Hello Rigo from the console!");
};
