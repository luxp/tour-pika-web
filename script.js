
import { render, createElement, Component } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";
const html = htm.bind(createElement);

const Header = ({ name }) => html`<header><h2>${name} List</h2></header>`
const Footer = props => html`<footer ...${props} />`

class App extends Component {
    addTodo() {
        const todos = this.state.todos || [];
        this.setState({ todos: todos.concat(`Item ${todos.length}`) });
    }
    render({ }, { todos = [] }) {
        return html`
      <div class="app">
        <${Header} name="Todo List" />
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button class="btn" onClick=${() => this.addTodo()}>✨ Add Item</button>
        <${Footer}>This is a footer.<//>
      </div>
    `;
    }
}

render(html`<${App} />`, document.getElementById("__root__"));