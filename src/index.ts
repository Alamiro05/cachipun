import {initRouter} from "./router"
import { init as initTextField } from "./components/welcome";
import { init as initRules } from "./components/rules/text-field-rules";
import { initGame as initPlay } from "./components/game/game";
import { initScoreboard } from "./components/scoreboard/scoreboard";
function main(){
    initTextField();
    initRules();
    initPlay();
    initScoreboard();
}
main();

(function () {
    const contenedorGeneral = document.querySelector(".contenedor-general");
    initRouter(contenedorGeneral)
    })()
