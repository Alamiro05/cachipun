import { navigateTo } from "../../router"; 
const piedra = new URL("../../img/piedra.png", import.meta.url);
const tijera = new URL("../../img/tijera.png", import.meta.url);
const papel = new URL("../../img/papel.png", import.meta.url);
export function init() {
    class MyTextFieldstep1 extends HTMLElement {   
        constructor() {
            super();
            this.render();
        }

        render() {
            const shadow = this.attachShadow({ mode: 'open' });

            const style = document.createElement('style');
            style.innerHTML = `
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
                
                `;

            const div = document.createElement('div');
            div.classList.add('root');

            div.innerHTML = `
                <div class="divfield">
                    <div class="divfield-title">Presioná jugar
y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</div>
                        <button class="button-1">!JUGAR¡</button>
                </div>
                <div class= "imagenes">
                        <div class="piedra"><img src="${tijera}"></div>
                        <div class="papel"><img src="${piedra}"></div>
                        <div class="tijera"><img src="${papel}"></div>
                    </div>
            `;

            const button1 = div.querySelector('.button-1');
            if (button1) {
                button1.addEventListener('click', () => {
                    navigateTo('/play'); 
                });
                    }
            
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define('my-text-field-step1', MyTextFieldstep1);
}