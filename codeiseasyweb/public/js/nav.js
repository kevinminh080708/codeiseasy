const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <nav class="navbar">
        <a href="#home">HOME</a>
        <a href="#news">HTML</a>
        <a href="#contact">CSS</a>
        <a href="#about">JS</a>
        <a href="#about">ABOUT</a>
        </nav>
    `;
}

createNav();