import { navigateTo } from "../../router"; 
const piedra = new URL("../../img/piedra.png", import.meta.url);
const tijera = new URL("../../img/tijera.png", import.meta.url);
const papel = new URL("../../img/papel.png", import.meta.url);

let userWins = Number(localStorage.getItem('userWins')) || 0;
let computerWins = Number(localStorage.getItem('computerWins')) || 0;

function redirectToRules() {
    navigateTo("/rules");
}

function redirectToResults(userChoice: string, computerChoice: string, winner: string) {
    window.history.pushState({ userChoice, computerChoice, winner }, "", "/scoreboard");
    window.dispatchEvent(new Event("popstate"));
}

export function initGame() {
    class GamePage extends HTMLElement {   
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
            `;

            const div = document.createElement('div');
            div.classList.add('root');

            div.innerHTML = `
                <p class="countdown" id="countdown">3</p>
                <div class="computer-choice" id="computer-choice"></div>
                <div class="imagenes">
                    <img src="${piedra}" alt="Piedra" data-choice="Piedra">
                    <img src="${papel}" alt="Papel" data-choice="Papel">
                    <img src="${tijera}" alt="Tijera" data-choice="Tijera">
                </div>
                <div class="resultado"></div>
            `;

            const countdownElement = div.querySelector("#countdown") as HTMLElement | null;
            const computerChoiceElement = div.querySelector("#computer-choice");
            let interval: number | undefined;
            let userChoice: string | null = null; 
            let computerChoice: string | null = null; 

            startCountdown();
            const options = div.querySelectorAll(".imagenes img");
            options.forEach((option) => {
                option.addEventListener("click", (e) => {
                    const target = e.target as HTMLElement; 
                    if (target && target.dataset.choice) {
                        userChoice = target.dataset.choice;
                        options.forEach(opt => {
                            (opt as HTMLElement).classList.add("disabled"); 
                            (opt as HTMLElement).classList.remove("selected"); 
                            (opt as HTMLElement).style.opacity = "0.5";
                        });
                        target.classList.add("selected"); 
                        target.style.opacity = "1"; 

                        if (countdownElement) {
                            countdownElement.style.display = "none";
                        }

                        clearInterval(interval);  
                        computerChoice = autoSelectRandom();  
                        
                        if (computerChoiceElement) {
                            const img = document.createElement('img');
                            img.src = getImageForChoice(computerChoice);
                            img.className = "computer-choice-img"; 
                            computerChoiceElement.appendChild(img);
                        }

                        if (userChoice && computerChoice) {
                            setTimeout(() => {
                                const winner = determineWinner(userChoice!, computerChoice!);  
                                redirectToResults(userChoice!, computerChoice!, winner);  
                            }, 2000);
                        } else {
                            redirectToRules();
                        }
                    }
                });
            });

            shadow.appendChild(style);
            shadow.appendChild(div);

            function startCountdown() {
                let counter = 2;
            
                interval = setInterval(() => {
                    if (countdownElement) { 
                        countdownElement.textContent = counter.toString();
                    }
                    counter--;
            
                    if (counter < 0) {
                        clearInterval(interval);
                        if (!userChoice) {
                            redirectToRules();
                        }
                    }
                }, 1000);
            }

            function autoSelectRandom(): string {
                const opciones = ["Piedra", "Papel", "Tijera"];
                const randomChoice = opciones[Math.floor(Math.random() * opciones.length)];
                return randomChoice;
            }

            function getImageForChoice(choice: string): string {
                switch (choice) {
                    case "Piedra":
                        return piedra.toString(); 
                    case "Papel":
                        return papel.toString(); 
                    case "Tijera":
                        return tijera.toString(); 
                    default:
                        return "";
                }
            }

            function determineWinner(user: string, computer: string): string {
                if (user === computer) {
                    return "Empate";
                }
            
                if (
                    (user === "Piedra" && computer === "Tijera") ||
                    (user === "Papel" && computer === "Piedra") ||
                    (user === "Tijera" && computer === "Papel")
                ) {
                    userWins++;
                    localStorage.setItem('userWins', userWins.toString());
                    return "Usuario";
                } else {
                    computerWins++;
                    localStorage.setItem('computerWins', computerWins.toString());
                    return "Computadora";
                }
            }
        }
    }

    customElements.define('game-page', GamePage);
}
