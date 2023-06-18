const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <nav class="navbar">
        <img class="logo-img" src="/../logo.png" width="100" height="70" ALT="align box" ALIGN=CENTER>
        <a href="/codeiseasyweb/public/index.html">HOME</a>
        <a href="/codeiseasyweb/public/htmlpage.html">HTML</a>
        <a href="/codeiseasyweb/public/csspage.html">CSS</a>
        <a href="/codeiseasyweb/public/jspage.html">JS</a>
        <a href="/codeiseasyweb/public/about.html">ABOUT</a>
        </nav>
    `;
}

createNav();