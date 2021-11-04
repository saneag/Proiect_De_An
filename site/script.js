let cars = document.getElementsByClassName('cars')
let myModal = document.getElementById('myModal')
let modal_content = document.getElementById('modal_content')
let par, car_info
let img = document.createElement('img')
let new_div = document.createElement('div')

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

}
function display_img(i) {
    new_div = document.createElement('div')
    switch (i) {
        case 0:
            img.src = './images/alfa_romeo_stelvio_quadrifoglio_modal.png'
            new_div.appendChild(img)
            modal_content.appendChild(new_div)
            break
        case 1: img.src = './images/alfa_romeo_giulia_quadrifoglio_modal.jpg'
            new_div.appendChild(img)
            modal_content.appendChild(new_div)
    }
}

function remove_info() {
    myModal.style.visibility = 'hidden'
    myModal.style.opacity = '0'
    while (modal_content.firstChild) {
        modal_content.removeChild(modal_content.lastChild)
    }
}

window.onclick = (event) => {
    if (event.target == myModal)
        remove_info()
}

function change_theme() {
    let img = document.getElementById('theme_changer')
    if (img.src.match('color_change_white.png')) {
        img.src = './images/color_change_dark.png'
        document.body.classList.add('change_color')
    }
    else {
        img.src = './images/color_change_white.png'
        document.body.classList.remove('change_color')
    }
}