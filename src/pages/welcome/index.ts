export function initWelcome() {
    const div = document.createElement('div');
    div.innerHTML = `
        <my-text-field></my-text-field>
    `;
    return div;
}
