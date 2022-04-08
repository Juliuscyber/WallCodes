const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')



function scrollHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// window.sr = ScrollReveal({
//     reset: true
// });

// sr.reveal(`.container, .pen,
//             .card2, .introduction,
//             .content, .boxy,
//             .contact-form, .me,
//             .boxes, .bttn, .imBx`, {
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     interval: 200
// })
