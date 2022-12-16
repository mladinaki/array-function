import { html,render } from '../../../node_modules/lite-html/lite-html.js'
import { login } from '../api/data.js';
import { navidateTempUpdata } from './nav.js';

let context = null
export function showLogin(ctx) {
    context = ctx;
    ctx.render(loginTemplate(onSubmit))
}

async function onSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const { email, password } = Object.fromEntries(form);
    await login(email, password);
    navidateTempUpdata()
    context.page.redirect('/')
}

const loginTemplate = (hendler) => html`
<section id="loginPage">
    <form @submit=${hendler}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>

`