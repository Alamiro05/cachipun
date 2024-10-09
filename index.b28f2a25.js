var e=globalThis,t={},o={},n=e.parcelRequire5feb;function i(){let e=document.createElement("div");return e.innerHTML=`
        <my-text-field-step1></my-text-field-step1>
    `,e}function r(){let e=document.createElement("div");return e.innerHTML=`
        <game-page></game-page>
    `,e}function a(){let e=document.createElement("div");return e.innerHTML=`
        <my-text-field></my-text-field>
    `,e}function s(){let e=document.createElement("div");return e.innerHTML=`
        <scoreboard-page></scoreboard-page>
    `,e}null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire5feb=n),(0,n.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.b28f2a25.js","hbeyn","piedra.19124f4c.png","cnU0O","tijera.a939272c.png","5mdmA","papel.f0e8e201.png","57fgu","resultadoWin.282b81b6.png","79GE5","resultadoLoss.5074e4bf.png"]'));const l="/alamiro05.github.io";function c(e){console.log("El handle route recibió una nueva ruta:",e);let t=[{path:RegExp(`^${l}/rules`),component:i},{path:RegExp(`^${l}/play`),component:r},{path:RegExp(`^${l}/welcome`),component:a},{path:RegExp(`^${l}/scoreboard`),component:s}],o=document.querySelector(".content");if(o){o.innerHTML="";let n=!1;for(let i of t)if(i.path.test(e)){let e=i.component();o.appendChild(e),n=!0;break}n||(console.error("Ruta no encontrada:",e),d(`${l}/welcome`))}else console.error("No se encontró el elemento con la clase 'content'.")}function d(e){history.pushState({},"",e),c(e)}var p={};p=new URL("piedra.19124f4c.png",import.meta.url).toString();const m=new URL(p);var u={};u=new URL("tijera.a939272c.png",import.meta.url).toString();const g=new URL(u);var f={};f=new URL("papel.f0e8e201.png",import.meta.url).toString();const h=new URL(f),x=new URL(p),b=new URL(u),v=new URL(f),w=new URL(p),y=new URL(u),S=new URL(f);let L=Number(localStorage.getItem("userWins"))||0,E=Number(localStorage.getItem("computerWins"))||0;function H(){d("/rules")}var R={};R=new URL("resultadoWin.282b81b6.png",import.meta.url).toString();const C=new URL(R);var T={};T=new URL("resultadoLoss.5074e4bf.png",import.meta.url).toString();const j=new URL(T);!function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
                .root {
                    display: flex;
                    flex-direction: column;
                }
                .button {
                    min-width: 322px;
                    height: 87px;
                    padding: 17px 13px;
                    font-size: 18px;
                    margin-top: 3px;
                    background-color: #006CFC;
                    border: solid #001997;
                    border-radius: 10px;
                    margin-top: 16px;
                    margin-bottom: 50px;
                    color: white;
                    font-size: 45px;
                    font-weight: 400;
                }
                .button:active {
                    transform: scale(0.9); 
                }
                .divfield{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .divfield-title{
                    width: 295px;
                    height: 270px;
                    font-size: 100px;
                    font-weight: 700;
                    margin-top: 65px;
                    margin-left: 80px;
                    margin-bottom: 80px;
                    color:#009048
                }
                .transparent{
                    opacity: 0.5;
                }
                .imagenes {
                    width: 350px;
                    position: fixed;
                    bottom: 0; 
                    left: 0; 
                    right: 0; 
                    display: flex; 
                    justify-content: space-around;
                    margin: 0 auto;
                }
                
                `;let o=document.createElement("div");o.classList.add("root"),o.innerHTML=`
                <div class="divfield">
                    <div class="divfield-title">Piedra Papel <span class="transparent">\xf3</span> Tijera</div>
                        <button class="button">Empezar</button>
                    </div>
                    <div class= "imagenes">
                        <div class="piedra"><img src="${g}"></div>
                        <div class="papel"><img src="${m}"></div>
                        <div class="tijera"><img src="${h}"></div>
                    </div>
            `;let n=o.querySelector(".button");n&&n.addEventListener("click",()=>{d("/rules")}),e.appendChild(t),e.appendChild(o)}}customElements.define("my-text-field",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
                .root {
                    display: flex;
                    flex-direction: column;
                }
                .button-1 {
                    min-width: 322px;
                    height: 87px;
                    padding: 17px 13px;
                    font-size: 18px;
                    background-color: #006CFC;
                    border: solid #001997;
                    border-radius: 10px;
                    margin-top: 16px;
                    margin-bottom: 50px;
                    color: white;
                    font-size: 45px;
                    font-weight: 400;
                }
                    .button-reset {
                    margin-top: 20px;
                    padding: 10px;
                    font-size: 20px;
                    background-color: #006CFC;
                    color: white;
                    border: solid #001997;
                    border-radius: 10px;
                    cursor: pointer;
                }
                .button-1:active {
                    transform: scale(0.9); 
                }
                .divfield{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .divfield-title{
                    width: 295px;
                    height: 270px;
                    font-size: 40px;
                    font-weight: 600;
                    margin-top: 65px;
                    color:#000000
                }
                .imagenes {
                    width: 350px;
                    position: fixed;
                    bottom: 0; 
                    left: 0; 
                    right: 0; 
                    display: flex; 
                    justify-content: space-around;
                    margin: 0 auto;
                }
                
                `;let o=document.createElement("div");o.classList.add("root"),o.innerHTML=`
                <div class="divfield">
                    <div class="divfield-title">Presion\xe1 jugar
y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</div>
                        <button class="button-1">!JUGAR\xa1</button>
                        <button class="button-reset">Reiniciar Puntajes</button>
                </div>
                <div class= "imagenes">
                        <div class="piedra"><img src="${b}"></div>
                        <div class="papel"><img src="${x}"></div>
                        <div class="tijera"><img src="${v}"></div>
                    </div>
            `;let n=o.querySelector(".button-1"),i=o.querySelector(".button-reset");n&&n.addEventListener("click",()=>{d("/play")}),i&&i.addEventListener("click",()=>{localStorage.setItem("userWins","0"),localStorage.setItem("computerWins","0"),history.pushState(null,"","/play")}),e.appendChild(t),e.appendChild(o)}}customElements.define("my-text-field-step1",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e,t;let o=this.attachShadow({mode:"open"}),n=document.createElement("style");n.innerHTML=`
                .root {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .imagenes {
                    min-width: 250px;
                    max-width: 450px;
                    display: flex; 
                    justify-content: space-around;
                    position: fixed;
                    bottom: 0; 
                    left: 0; 
                    right: 0; 
                    margin: 0 auto;
                }
                .imagenes img {
                    width: 100px;
                    cursor: pointer;
                    opacity: 0.5; 
                    transition: transform 0.3s ease, border 0.3s ease, opacity 0.3s ease;
                }
                .imagenes img:hover {
                    opacity: 1; 
                    transform: scale(1.1); 
                }
                .imagenes img.selected {
                    transform: scale(1.1); 
                    opacity: 1; 
                    border: 3px solid #006CFC; 
                }
                .imagenes img.disabled {
                    pointer-events: none; 
                }
                .resultado {
                    margin-top: 20px;
                    font-size: 24px;
                }
                .computer-choice {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .computer-choice img {
                    width: 100px; 
                    opacity: 1; 
                    transform: rotate(180deg);
                    bottom: 0; 
                    left: 0; 
                    right: 0; 
                    margin: 0 auto;
                }
                .button-1 {
                    margin-top: 20px;
                    padding: 10px;
                    font-size: 20px;
                    background-color: #006CFC;
                    color: white;
                    border: none;
                    border-radius: 5px;
                }
                .countdown {
                    height: 200px;
                    font-size: 100px;
                    font-weight: 700;
                }
            `;let i=document.createElement("div");i.classList.add("root"),i.innerHTML=`
                <p class="countdown" id="countdown">3</p>
                <div class="computer-choice" id="computer-choice"></div>
                <div class="imagenes">
                    <img src="${w}" alt="Piedra" data-choice="Piedra">
                    <img src="${S}" alt="Papel" data-choice="Papel">
                    <img src="${y}" alt="Tijera" data-choice="Tijera">
                </div>
                <div class="resultado"></div>
            `;let r=i.querySelector("#countdown"),a=i.querySelector("#computer-choice"),s=null,l=null;t=2,e=setInterval(()=>{r&&(r.textContent=t.toString()),--t<0&&(clearInterval(e),s||H())},1e3);let c=i.querySelectorAll(".imagenes img");c.forEach(t=>{t.addEventListener("click",t=>{let o=t.target;if(o&&o.dataset.choice){if(s=o.dataset.choice,c.forEach(e=>{e.classList.add("disabled"),e.classList.remove("selected"),e.style.opacity="0.5"}),o.classList.add("selected"),o.style.opacity="1",r&&(r.style.display="none"),clearInterval(e),l=function(){let e=["Piedra","Papel","Tijera"];return e[Math.floor(Math.random()*e.length)]}(),a){let e=document.createElement("img");e.src=function(e){switch(e){case"Piedra":return w.toString();case"Papel":return S.toString();case"Tijera":return y.toString();default:return""}}(l),e.className="computer-choice-img",a.appendChild(e)}s&&l?setTimeout(()=>{var e,t,o,n;let i=(o=s)===(n=l)?"Empate":"Piedra"===o&&"Tijera"===n||"Papel"===o&&"Piedra"===n||"Tijera"===o&&"Papel"===n?(L++,localStorage.setItem("userWins",L.toString()),"Usuario"):(E++,localStorage.setItem("computerWins",E.toString()),"Computadora");e=s,t=l,localStorage.setItem("userChoice",e),localStorage.setItem("computerChoice",t),localStorage.setItem("winner",i),d("/scoreboard")},2e3):H()}})}),o.appendChild(n),o.appendChild(i)}}customElements.define("game-page",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
                .root {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    width: 100vw;
                    font-size: 24px;
                }
                .result {
                    font-size: 32px;
                    margin-bottom: 20px;
                    font-weight: bold;
                    padding: 20px;
                    display: inline-block;
                    text-align: center;
                    color: black;
                    background-color: transparent;
                }
                .scoreboard {
                    display: flex;
                    justify-content: space-between;
                    width: 300px;
                    border: 2px solid black;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    background-color: white; 
                }
                .button-back {
                    margin-top: 20px;
                    padding: 10px;
                    font-size: 20px;
                    background-color: #006CFC;
                    color: white;
                    border: solid #001997;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .win {
                    background-color: rgba(0, 204, 255, 0.4); 
                }
                .lose {
                    background-color: rgba(255, 0, 0, 0.4);
                }

                .result img {
                    width: 150px; 
                    height: auto;
                    margin-top: 10px;
                    display: block;
                }

                .win-image, .lose-image {
                    margin: 0 auto; 
                }
            `;let o=document.createElement("div");o.classList.add("root"),this.updateScoreboard(o);let n=o.querySelector(".button-back");n&&n.addEventListener("click",()=>{d("/rules")}),e.appendChild(t),e.appendChild(o)}updateScoreboard(e){let t=Number(localStorage.getItem("userWins"))||0,o=Number(localStorage.getItem("computerWins"))||0,n=localStorage.getItem("winner"),i="Empate",r="",a="";n&&("Usuario"===n?(r="win",i="Ganaste",a=`<img class="win-image" src="${C}" alt="Ganaste">`):"Computadora"===n&&(r="lose",i="Perdiste",a=`<img class="lose-image" src="${j}" alt="Perdiste">`)),e.innerHTML=`
            <div class="root ${r}"> 
                <div class="result"> ${i} ${a}</div>
                <div class="scoreboard">
                    <p>Usuario: ${t}</p>
                    <p>Computadora: ${o}</p>
                </div>
                <button class="button-back">Volver al Juego</button>
            </div>
        `}}customElements.define("scoreboard-page",e)}(),document.querySelector(".contenedor-general"),window.location.pathname===l||window.location.pathname===`${l}/`?d(`${l}/welcome`):c(window.location.pathname),window.addEventListener("popstate",()=>{c(window.location.pathname)});
//# sourceMappingURL=index.b28f2a25.js.map
