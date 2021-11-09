const cars = document.getElementsByClassName('cars')
const myModal = document.getElementById('myModal')
const modal_content = document.getElementById('modal_content')
const img = document.createElement('img')
let new_div = document.createElement('div')
let par, car_info
const links = document.getElementsByTagName('a')
const inp = document.querySelectorAll('input')
const footer = document.querySelector('footer')


window.onload = () => {
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
        document.getElementsByClassName('loading')[0].style.visibility = 'hidden'
        document.getElementsByClassName('loading')[0].style.opacity = '0'
        document.body.style.overflowY = ''
    }, 2000)
}

for (let i = 0; i < cars.length; i++) {
    cars[i].addEventListener('click', () => {
        display(i)
    })
}

function display(x) {
    myModal.style.visibility = 'visible'
    myModal.style.opacity = '1'
    let id = 'car' + (x + 1)
    let txt = ''
    display_img(x)
    new_div = document.createElement('div')
    for (let i in allCars[x]) {
        txt = i.charAt(0).toUpperCase() + i.slice(1) + ': ' + allCars[x][i] + '\n'
        par = document.createElement('p')
        car_info = document.createTextNode(txt)
        par.appendChild(car_info)
        new_div.appendChild(par)
        modal_content.appendChild(new_div)
    }
    disableScroll()
}
function display_img(i) {
    new_div = document.createElement('div')
    switch (i) {
        case 0:
            img.src = './images/alfa_romeo_stelvio_quadrifoglio_modal.png'
            add_image(img)
            break
        case 1:
            img.src = './images/alfa_romeo_giulia_quadrifoglio_modal.jpg'
            add_image(img)
            break
        case 2: img.src = './images/alfa_romeo_4c_modal.png'
            add_image(img)
            break
        case 3: img.src = './images/alfa-romeo-8c-competizione_modal.jpg'
            add_image(img)
            break
        case 4: img.src = './images/aston_martin_db11_modal.png'
            add_image(img)
            break
        case 5: img.src = './images/aston_martin_vulcan_modal.png'
            add_image(img)
            break
        case 6: img.src = './images/aston_martin_vantage_gt12_modal.png'
            add_image(img)
            break
        case 7: img.src = './images/aston_martin_db10_modal.png'
            add_image(img)
            break
        case 8: img.src = './images/audi_r8_v10_plus_modal.png'
            add_image(img)
            break
        case 9: img.src = './images/audi_s1_modal.png'
            add_image(img)
            break
        case 10: img.src = './images/audi_rs_6_avant_modal.png'
            add_image(img)
            break
        case 11: img.src = './images/audi_tts_coupe_modal.png'
            add_image(img)
            break
        case 12: img.src = './images/'
            add_image(img)
            break
        case 13: img.src = './images/'
            add_image(img)
            break
        case 14: img.src = './images/'
            add_image(img)
            break
        case 15: img.src = './images/'
            add_image(img)
            break
        case 16: img.src = './images/'
            add_image(img)
            break
        case 17: img.src = './images/'
            add_image(img)
            break
        case 18: img.src = './images/'
            add_image(img)
            break
        case 19: img.src = './images/'
            add_image(img)
            break
        case 20: img.src = './images/'
            add_image(img)
            break
    }
}

function add_image(img) {
    new_div.appendChild(img)
    modal_content.appendChild(new_div)
}

function remove_info() {
    myModal.style.visibility = 'hidden'
    myModal.style.opacity = '0'
    while (modal_content.firstChild) {
        modal_content.removeChild(modal_content.lastChild)
    }
    enableScroll()
}

window.onclick = (event) => {
    if (event.target == myModal) {
        remove_info()
        enableScroll()
    }
}

function change_theme() {
    let img = document.getElementById('theme_changer')
    img.classList.toggle('rotate_theme')
    if (img.classList.contains('rotate_theme')) {
        document.body.style.backgroundColor = 'white'
        footer.style.color = 'black'
        for (let i = 4; i < links.length; i++) {
            links[i].style.color = 'black'
        }
    }
    else {
        document.body.style.backgroundColor = ''
        footer.style.color = ''
        for (let i = 4; i < links.length; i++) {
            links[i].style.color = ''
        }
    }
}

//prevent scrolling
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
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

let cnt = 0

function deleteInput() {
    document.getElementsByClassName('arrow')[0].classList.toggle('down')
    document.getElementsByClassName('arrow')[0].classList.toggle('up')
    if (cnt) {
        setTimeout(() => {
            for (let i = 0; i < inp.length; i++)
                if (inp[i].value.length != 0) {
                    inp[i].value = ''
                }
            cnt = 0
        }, 300)
    }
    cnt = 1
}

function rotateArrow() {
    document.getElementsByClassName('arrow')[1].classList.toggle('down')
    document.getElementsByClassName('arrow')[1].classList.toggle('up')
}
