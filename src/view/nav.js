import { html, render } from '../../../node_modules/lite-html/lite-html.js'
import { getUserData } from '../api/api.js';
import page from '../../../node_modules/page/page.mjs';

const nav = document.querySelector('header');

export function navidateTempUpdata() {
    const user = getUserData()
    render(navTemplate(user),nav);
    page.redirect('/')
}

const navTemplate = (hasUser) => html`

    <nav>
        <img src="./images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <!--All user-->
           
          <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
             ${!hasUser
           ?  html`
           <!--Only guest-->
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>`
           : html`
           <!--Only user-->
            <li><a href="/create">Create Album</a></li>
            <li><a href="#">Logout</a></li>`}
        </ul>
    </nav>
`