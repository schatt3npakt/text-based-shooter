export class MainMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Welcome to the Game Main Menu</h1>
      <ul>
        <li><a href="#">Start Game</a></li>
        <li><a href="#">Options</a></li>
        <li><a href="#">Exit</a></li>
      </ul>
    `;
  }
}
