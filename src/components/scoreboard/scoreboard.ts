import { navigateTo } from "../../router"; 
const resultadoWin = new URL("../../img/resultadoWin.png", import.meta.url);
const resultadoLoss = new URL("../../img/resultadoLoss.png", import.meta.url);

export function initScoreboard() {
    class ScoreboardPage extends HTMLElement {
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
            `;

            const div = document.createElement('div');
            div.classList.add('root');

            this.updateScoreboard(div);

            const buttonBack = div.querySelector('.button-back');
            const buttonReset = div.querySelector('.button-reset');

            if (buttonBack) {
                buttonBack.addEventListener('click', () => {
                    navigateTo("/play");
                });
            }

            if (buttonReset) {
                buttonReset.addEventListener('click', () => {
                    localStorage.setItem('userWins', '0');
                    localStorage.setItem('computerWins', '0');
                    this.updateScoreboard(div); 
                    window.location.href = "/rules";
                });
            }

            shadow.appendChild(style);
            shadow.appendChild(div);
        }

        updateScoreboard(div) {
            const userWins = Number(localStorage.getItem('userWins')) || 0;
            const computerWins = Number(localStorage.getItem('computerWins')) || 0;

            const state = window.history.state;
            let resultMessage = '';
            let resultClass = '';
            let resultImage = '';

            if (state && state.winner) {
                if (state.winner === "Usuario") {
                    resultClass = 'win'; 
                    resultImage = `<img class="win-image" src="${resultadoWin}" alt="Ganaste">`; 
                } else if (state.winner === "Computadora") {
                    resultClass = 'lose'; 
                    resultImage = `<img class="lose-image" src="${resultadoLoss}" alt="Perdiste">`; 
                } else {
                    resultMessage = "Empate";
                    resultClass = ''; 
                    resultImage = '';
                }
            }

            div.innerHTML = `
                <div class="root ${resultClass}">
                    <div class="result"> ${resultMessage} ${resultImage}</div>
                    <div class="scoreboard">
                        <p>Usuario: ${userWins}</p>
                        <p>Computadora: ${computerWins}</p>
                    </div>
                    <button class="button-back">Volver al Juego</button>
                    <button class="button-reset">Reiniciar Puntajes</button>
                </div>
            `;
        }
    }

    customElements.define('scoreboard-page', ScoreboardPage);
}
