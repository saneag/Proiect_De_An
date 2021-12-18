let img = document.createElement('img')
const mobile_nav = document.getElementById('mobile_nav')
const menu = document.getElementById('openmenu')


window.onload = () => {
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
        document.getElementsByClassName('loading')[0].style.visibility = 'hidden'
        document.getElementsByClassName('loading')[0].style.opacity = '0'
        document.body.style.overflowY = ''
    }, 2000)
}

function change_theme() {
    img = document.getElementById('theme_changer')
    img.classList.toggle('rotate_theme')
    if (img.classList.contains('rotate_theme')) {
        document.body.style.backgroundColor = 'white'
        footer.style.color = 'black'
        for (let i = 0; i < inp.length; i++) {
            inp[i].style.color = 'black'
        }
        for (let i = 4; i < link.length; i++) {
            link[i].style.color = 'black'
        }
    }
    else {
        document.body.style.backgroundColor = ''
        footer.style.color = ''
        for (let i = 0; i < inp.length; i++) {
            inp[i].style.color = ''
        }
        for (let i = 4; i < link.length; i++) {
            link[i].style.color = ''
        }
    }
}

let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }
let wheelOpt = supportsPassive ? { passive: false } : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

//mobile menu
function openMenu() {
    mobile_nav.classList.toggle('show_nav')
    menu.classList.toggle('change')
}

window.onscroll = () => {
    if (mobile_nav.classList.contains('show_nav')) {
        mobile_nav.classList.remove('show_nav')
    }
    if (menu.classList.contains('change')) {
        menu.classList.remove('change')
    }
}

window.addEventListener('mouseup', (event) => {
    if (event.target != mobile_nav && event.target.parentNode != mobile_nav) {
        mobile_nav.classList.remove('show_nav')
        menu.classList.remove('change')
    }
})

//goto up button
window.addEventListener('scroll', () => {
    let up_arrow = document.getElementById('up_arrow')
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        up_arrow.classList.add('change')
    }
    else {
        up_arrow.classList.remove('change')
    }
})
function goto_up() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}