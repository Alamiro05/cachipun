var e=globalThis,t={},n={},o=e.parcelRequire5feb;function i(){let e=document.createElement("div");return e.innerHTML=`
        <my-text-field-step1></my-text-field-step1>
    `,e}function r(){let e=document.createElement("div");return e.innerHTML=`
        <game-page></game-page>
    `,e}function a(){let e=document.createElement("div");return e.innerHTML=`
        <my-text-field></my-text-field>
    `,e}function s(){let e=document.createElement("div");return e.innerHTML=`
        <scoreboard-page></scoreboard-page>
    `,e}function l(e){console.log("El handle route recibió una nueva ruta:",e);let t=document.querySelector(".content");if(t){t.innerHTML="";let n=!1;for(let o of[{path:/\/rules/,component:i},{path:/\/play/,component:r},{path:/\/welcome/,component:a},{path:/\/scoreboard/,component:s}])if(o.path.test(e)){let e=o.component();t.appendChild(e),n=!0;break}n||n||(console.error("Ruta no encontrada:",e),d("/welcome"))}else console.error("No se encontró el elemento con la clase 'content'.")}function d(e){history.pushState({},"",e),l(e)}null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire5feb=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.8aa5c089.js","hbeyn","piedra.19124f4c.png","cnU0O","tijera.a939272c.png","5mdmA","papel.f0e8e201.png","57fgu","resultadoWin.282b81b6.png","79GE5","resultadoLoss.5074e4bf.png"]'));var c={};c=new URL("piedra.19124f4c.png",import.meta.url).toString();const p=new URL(c);var u={};u=new URL("tijera.a939272c.png",import.meta.url).toString();const m=new URL(u);var g={};g=new URL("papel.f0e8e201.png",import.meta.url).toString();const f=new URL(g),h=new URL(c),b=new URL(u),x=new URL(g),w=new URL(c),v=new URL(u),y=new URL(g);let L=Number(localStorage.getItem("userWins"))||0,S=Number(localStorage.getItem("computerWins"))||0;function E(){d("/rules")}var H={};H=new URL("resultadoWin.282b81b6.png",import.meta.url).toString();const R=new URL(H);var C={};C=new URL("resultadoLoss.5074e4bf.png",import.meta.url).toString();const T=new URL(C);!function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
                
                `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
                <div class="divfield">
                    <div class="divfield-title">Piedra Papel <span class="transparent">\xf3</span> Tijera</div>
                        <button class="button">Empezar</button>
                    </div>
                    <div class= "imagenes">
                        <div class="piedra"><img src="${m}"></div>
                        <div class="papel"><img src="${p}"></div>
                        <div class="tijera"><img src="${f}"></div>
                    </div>
            `;let o=n.querySelector(".button");o&&o.addEventListener("click",()=>{d("/rules")}),e.appendChild(t),e.appendChild(n)}}customElements.define("my-text-field",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
                
                `;let n=document.createElement("div");n.classList.add("root"),n.innerHTML=`
                <div class="divfield">
                    <div class="divfield-title">Presion\xe1 jugar
y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</div>
                        <button class="button-1">!JUGAR\xa1</button>
                </div>
                <div class= "imagenes">
                        <div class="piedra"><img src="${b}"></div>
                        <div class="papel"><img src="${h}"></div>
                        <div class="tijera"><img src="${x}"></div>
                    </div>
            `;let o=n.querySelector(".button-1");o&&o.addEventListener("click",()=>{d("/play")}),e.appendChild(t),e.appendChild(n)}}customElements.define("my-text-field-step1",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e,t;let n=this.attachShadow({mode:"open"}),o=document.createElement("style");o.innerHTML=`
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
                    <img src="${y}" alt="Papel" data-choice="Papel">
                    <img src="${v}" alt="Tijera" data-choice="Tijera">
                </div>
                <div class="resultado"></div>
            `;let r=i.querySelector("#countdown"),a=i.querySelector("#computer-choice"),s=null,l=null;t=2,e=setInterval(()=>{r&&(r.textContent=t.toString()),--t<0&&(clearInterval(e),s||E())},1e3);let d=i.querySelectorAll(".imagenes img");d.forEach(t=>{t.addEventListener("click",t=>{let n=t.target;if(n&&n.dataset.choice){if(s=n.dataset.choice,d.forEach(e=>{e.classList.add("disabled"),e.classList.remove("selected"),e.style.opacity="0.5"}),n.classList.add("selected"),n.style.opacity="1",r&&(r.style.display="none"),clearInterval(e),l=function(){let e=["Piedra","Papel","Tijera"];return e[Math.floor(Math.random()*e.length)]}(),a){let e=document.createElement("img");e.src=function(e){switch(e){case"Piedra":return w.toString();case"Papel":return y.toString();case"Tijera":return v.toString();default:return""}}(l),e.className="computer-choice-img",a.appendChild(e)}s&&l?setTimeout(()=>{var e,t,n,o;let i=(n=s)===(o=l)?"Empate":"Piedra"===n&&"Tijera"===o||"Papel"===n&&"Piedra"===o||"Tijera"===n&&"Papel"===o?(L++,localStorage.setItem("userWins",L.toString()),"Usuario"):(S++,localStorage.setItem("computerWins",S.toString()),"Computadora");e=s,t=l,window.history.pushState({userChoice:e,computerChoice:t,winner:i},"","/scoreboard"),window.dispatchEvent(new Event("popstate"))},2e3):E()}})}),n.appendChild(o),n.appendChild(i)}}customElements.define("game-page",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.innerHTML=`
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
                .button-back, .button-reset {
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
                    width: 100%;
                    background-color: rgba(136, 137, 73, 0.6); 
                }
                .lose {
                    width: 100%;
                    background-color: rgba(137, 73, 73, 0.6);
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
            `;let n=document.createElement("div");n.classList.add("root"),this.updateScoreboard(n);let o=n.querySelector(".button-back"),i=n.querySelector(".button-reset");o&&o.addEventListener("click",()=>{d("/play")}),i&&i.addEventListener("click",()=>{localStorage.setItem("userWins","0"),localStorage.setItem("computerWins","0"),this.updateScoreboard(n),window.location.href="/rules"}),e.appendChild(t),e.appendChild(n)}updateScoreboard(e){let t=Number(localStorage.getItem("userWins"))||0,n=Number(localStorage.getItem("computerWins"))||0,o=window.history.state,i="",r="",a="";o&&o.winner&&("Usuario"===o.winner?(r="win",a=`<img class="win-image" src="${R}" alt="Ganaste">`):"Computadora"===o.winner?(r="lose",a=`<img class="lose-image" src="${T}" alt="Perdiste">`):(i="Empate",r="",a="")),e.innerHTML=`
                <div class="root ${r}">
                    <div class="result"> ${i} ${a}</div>
                    <div class="scoreboard">
                        <p>Usuario: ${t}</p>
                        <p>Computadora: ${n}</p>
                    </div>
                    <button class="button-back">Volver al Juego</button>
                    <button class="button-reset">Reiniciar Puntajes</button>
                </div>
            `}}customElements.define("scoreboard-page",e)}(),document.querySelector(".contenedor-general"),"/"===window.location.pathname?d("/welcome"):l(window.location.pathname),window.addEventListener("popstate",()=>{l(window.location.pathname)});
//# sourceMappingURL=index.8aa5c089.js.map
