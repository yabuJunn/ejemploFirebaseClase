import "./utilities/firebase/firebase"
import "./pages/exportPages"
import { getUsers } from "./utilities/firebase/firebase"

getUsers()

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/index.css")
        this.shadowRoot?.appendChild(link)

        const loginPage = this.ownerDocument.createElement("login-page")
        this.shadowRoot?.appendChild(loginPage)

    }
}

customElements.define("app-container", AppContainer)