import page from '../node_modules/page/page.mjs'
import { html, render } from '../node_modules/lite-html/lite-html.js'
import { showCatalog } from './src/view/catalog.js';
import { showCreate } from './src/view/craet.js';
import { showHome } from './src/view/home.js';
import { showLogin } from './src/view/login.js';
import { navidateTempUpdata } from './src/view/nav.js';
import { showRegister } from './src/view/register.js';
import { showSearch } from './src/view/search.js';
import { getUserData } from './src/api/api.js';

const main = document.getElementById('main-content')

page(renderContent);
page('/', showHome);
page('/catalog', showCatalog);
page('/search', showSearch);
page('/login', showLogin);
page('/register', showRegister);
page('/create', showCreate);
page('*', showCatalog)

navidateTempUpdata();
page.start()

function renderContent(ctx, next) {
    ctx.render = renderMine;
    ctx.navidateTempUpdata = navidateTempUpdata;

    const user = getUserData();
    if (user) {
        ctx.user = user
    }
    next();
}

function renderMine(content) {
    render(content, main)
}