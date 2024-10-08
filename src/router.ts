import { initRules } from "./pages/rules/index";
import { initPlay } from "./pages/play/index";
import { initWelcome } from "./pages/welcome/index";
import {initScoreboard} from "./pages/scoreboard/index";


export function handleRoute(route) {
    console.log("El handle route recibió una nueva ruta:", route);
    
    const routes = [
        {
            path: /\/rules/,
            component: initRules,
        },
        {
            path: /\/play/,
            component: initPlay,
        },
        {
            path: /\/welcome/,
            component: initWelcome,
        },
        {
            path: /\/scoreboard/,
            component: initScoreboard
        }

    ];

    const contentEl = document.querySelector(".content");

    if (contentEl) {
        contentEl.innerHTML = ""; 
        let routeFound = false;
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component(); 
                contentEl.appendChild(el); 
                routeFound = true;
                break; 
            }
        }
        if (!routeFound) {
            if (!routeFound) {
                console.error("Ruta no encontrada:", route);
                navigateTo("/welcome"); 
            }
            
        }
    } else {
        console.error("No se encontró el elemento con la clase 'content'.");
    }
}

export function navigateTo(route) {
    history.pushState({}, "", route);
    handleRoute(route);
}

export function initRouter(params) {
    if (window.location.pathname === "/") {
        navigateTo("/welcome");
    } else {
        handleRoute(window.location.pathname);
    }

    window.addEventListener("popstate", () => {
        handleRoute(window.location.pathname);
    });
}
