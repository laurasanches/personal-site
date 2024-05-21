
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);

    // Verifica se a seção de destino existe
    if (targetSection) {
        // Calcula a posição da seção de destino
        const offsetTop = targetSection.offsetTop;

        // Desloca suavemente para a seção de destino
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}