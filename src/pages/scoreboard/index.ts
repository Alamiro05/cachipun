
export function initScoreboard() {
    const div = document.createElement('div');
    div.innerHTML = `
        <scoreboard-page></scoreboard-page>
    `;
    return div;
}
