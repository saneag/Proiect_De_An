const myModal = document.getElementById('myModal')
const modal_content = document.getElementById('modal_content')
const inp = document.getElementsByClassName('slide')[0].querySelectorAll('input')
const footer = document.querySelector('footer')
const mobile_nav = document.getElementById('mobile_nav')
const menu = document.getElementById('openmenu')
let add = document.getElementById('add_modal')
let img = document.createElement('img')
let image = document.createElement('img')
let new_div
let par, car_info
let link = document.getElementsByTagName('a')
let cnt = false
let a = 0

//display cars
window.addEventListener('click', (e) => {
    for (let i = 0; i < cars.length; i++) {
        if (e.target.parentElement.parentElement == cars[i])
            display_modal(temp_array[i])
    }
})

function display_modal(x) {
    myModal.style.visibility = 'visible'
    myModal.style.opacity = '1'
    let id = 'car' + (x + 1)
    let txt = ''
    display_img(x)
    new_div = document.createElement('div')
    for (let i in allCars[x]) {
        if (i == 'link')
            break
        if (i != 'pret')
            txt = `${i.charAt(0).toUpperCase() + i.slice(1)}: ${allCars[x][i]} \n`
        if (i == 'pret') {
            let temp_price = allCars[x][i]
            temp_price = temp_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
            txt = `${i.charAt(0).toUpperCase() + i.slice(1)}: ${temp_price} $\n`
        }
        if (i == 'capacitatea') {
            txt += 'ml'
        }
        if (i == 'puterea') {
            txt += 'HP'
        }
        par = document.createElement('p')
        car_info = document.createTextNode(txt)
        par.appendChild(car_info)
        new_div.appendChild(par)
        modal_content.appendChild(new_div)
        a++
    }
    a = 0
    disableScroll()
}

function display_img(i) {
    new_div = document.createElement('div')
    img.src = allCars[i].link
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

window.onclick = (e) => {
    if (e.target == myModal)
        remove_info()
    if (e.target == add)
        modal('ca')
}

//theme changer
function change_theme() {
    let img = document.getElementById('theme_changer')
    img.classList.toggle('rotate_theme')
    if (img.classList.contains('rotate_theme')) {
        document.body.style.backgroundColor = 'white'
        footer.style.color = 'black'
        for (let i = 0; i < cars.length; i++) {
            cars[i].getElementsByTagName('a')[0].style.color = 'black'
        }
        document.getElementById('up_arrow').classList.add('change_color')
        for (let i = 0; i < document.getElementsByClassName('slide')[0].querySelectorAll('input').length; i++) {
            document.getElementsByClassName('slide')[0].querySelectorAll('input')[i].style.color = 'black'
        }

    }
    else {
        document.body.style.backgroundColor = ''
        footer.style.color = ''
        for (let i = 0; i < cars.length; i++) {
            cars[i].getElementsByTagName('a')[0].style.color = ''
        }
        document.getElementById('up_arrow').classList.remove('change_color')
        for (let i = 0; i < document.getElementsByClassName('slide')[0].querySelectorAll('input').length; i++)
            document.getElementsByClassName('slide')[0].querySelectorAll('input')[i].style.color = ''
    }
}

//scroll prevent
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

//input
function rotateFirst() {
    document.getElementsByClassName('arrow')[0].classList.toggle('down')
    document.getElementsByClassName('arrow')[0].classList.toggle('up')
}
function rotateSecond() {
    document.getElementsByClassName('arrow')[1].classList.toggle('down')
    document.getElementsByClassName('arrow')[1].classList.toggle('up')
}

//mobile menu
function openMenu() {
    mobile_nav.classList.toggle('show_nav')
    menu.classList.toggle('change')
}

window.addEventListener('scroll', throttle(callback, 500))

function throttle(fn, wait) {
    let time = Date.now()
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn()
            time = Date.now()
        }
    }
}
let search_drop = document.getElementById('search_drop')
let sort_drop = document.getElementById('sort_drop')
function callback() {
    if (mobile_nav.classList.contains('show_nav')) {
        mobile_nav.classList.remove('show_nav')
    }
    if (menu.classList.contains('change')) {
        menu.classList.remove('change')
    }
    if (window.pageYOffset > 900) {
        if (search_drop.checked == true) {
            search_drop.checked = false
            rotateFirst()
        }
        if (sort_drop.checked == true) {
            sort_drop.checked = false
            rotateSecond()
        }
    }
}

window.addEventListener('mouseup', (event) => {
    if (event.target == document.getElementsByTagName('main')[0]) {
        mobile_nav.classList.remove('show_nav')
        menu.classList.remove('change')
    }
})

//display cars after sort or search
function display_help() {
    for (let i = 0; i < temp_array.length; i++) {
        display_main_cars(temp_array[i])
        if (document.getElementById('theme_changer').classList.contains('rotate_theme'))
            cars[i].getElementsByTagName('a')[0].style.color = 'black'
    }
}

function display_main_cars(i) {
    link = document.createElement('a')
    link.href = 'javascript:void(0)'
    image = document.createElement('img')
    par = document.createElement('p')
    image.src = allCars[i].link
    par.textContent = allCars[i].marca + ' ' + allCars[i].model
    link.appendChild(image)
    link.appendChild(par)
    new_div = document.createElement('div')
    new_div.className = 'overlay'
    link.appendChild(new_div)
    let temp_price = allCars[i].pret
    temp_price = temp_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    new_div.appendChild(document.createTextNode(`Anul: ${allCars[i].anul} \xa0 Pretul: ${temp_price} $`))
    cars[a].appendChild(link)
    a++
    if (a == tempSearchFinal.length)
        a = 0
}

function delete_main_cars() {
    for (let i = 0; i < allCars.length; i++) {
        while (cars[i].firstChild) {
            cars[i].removeChild(cars[i].lastChild)
        }
    }
}

function reset_search() {
    for (let i = 0; i < inp.length; i++)
        if (inp[i].value.length != 0) {
            inp[i].value = ''
        }
    searching_alg(0)
}

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

//search btn press
inp.forEach(element => {
    element.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            search.click()
        }
    })
})

function modal(x) {


    if (x == 'add') {
        let pass = prompt('Introduceti parola:')
        if (pass === 'Lemon') {
            add.style.visibility = 'visible'
            add.style.opacity = 1
            delete_input()
        }
        else {
            alert('Parola incorecta!')
        }
    }
    if (x == 'ca') {
        add.style.visibility = 'hidden'
        add.style.opacity = 0
    }
}

function delete_input() {
    let add_inp = document.getElementById('car_form').querySelectorAll('input')
    let select = document.getElementById('car_form').querySelectorAll('select')
    let radio_btns = document.getElementById('cutia').querySelectorAll('input[type=radio]')

    add_inp.forEach(input => {
        input.value = ''
    })
    select.forEach(sel => {
        sel.selectedIndex = 0
    })
    if (radio_btns[0].checked)
        radio_btns[0].checked = false
    if (radio_btns[1].checked)
        radio_btns[0].checked = false
}