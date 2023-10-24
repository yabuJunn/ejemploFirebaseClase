import { saveUser } from "../../utilities/firebase/firebase"

export class LoginPage extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/pages/login/login.css")
        this.shadowRoot?.appendChild(link)

        const mainContainer = this.ownerDocument.createElement("section")
        mainContainer.setAttribute("id", "loginPage")
        this.shadowRoot?.appendChild(mainContainer)

        const email = this.ownerDocument.createElement("input")
        email.setAttribute("type", "text")
        email.setAttribute("placeholder", "Put your email")
        mainContainer.appendChild(email)

        const password = this.ownerDocument.createElement("input")
        password.setAttribute("type", "text")
        password.setAttribute("placeholder", "Put your password")
        mainContainer.appendChild(password)

        const button = this.ownerDocument.createElement("button")
        button.innerHTML = "LOGIN"
        mainContainer.appendChild(button)

        button.addEventListener("click", () => {
            saveUser(email.value, password.value)
        })
    }
}

customElements.define("login-page", LoginPage)