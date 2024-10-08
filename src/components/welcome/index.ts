import { navigateTo } from "../../router"; 
const piedra = new URL("../../img/piedra.png", import.meta.url);
const tijera = new URL("../../img/tijera.png", import.meta.url);
const papel = new URL("../../img/papel.png", import.meta.url);
export function init() {
    class MyTextField extends HTMLElement {   
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
                
                `;

            const div = document.createElement('div');
            div.classList.add('root');

            div.innerHTML = `
                <div class="divfield">
                    <div class="divfield-title">Piedra Papel <span class="transparent">ó</span> Tijera</div>
                        <button class="button">Empezar</button>
                    </div>
                    <div class= "imagenes">
                        <div class="piedra"><img src="${tijera}"></div>
                        <div class="papel"><img src="${piedra}"></div>
                        <div class="tijera"><img src="${papel}"></div>
                    </div>
            `;

            const button = div.querySelector('.button'); 

            if (button) {
                button.addEventListener('click', () => {
                    navigateTo('/rules'); 
                });
                    }

            
            shadow.appendChild(style);
            shadow.appendChild(div);
        }
    }
    customElements.define('my-text-field', MyTextField);
}