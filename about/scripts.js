const myModal = document.getElementById('myModal')
const modal_content = document.getElementById('modal_content')
const footer = document.querySelector('footer')
const mobile_nav = document.getElementById('mobile_nav')
const menu = document.getElementById('openmenu')


window.onload = () => {
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
        window.scrollTo(0, 0)
        document.getElementsByClassName('loading')[0].style.visibility = 'hidden'
        document.getElementsByClassName('loading')[0].style.opacity = '0'
        document.body.style.overflowY = ''
        birthday()
    }, 1000);
}

//theme changer
function change_theme() {
    let img = document.getElementById('theme_changer')
    img.classList.toggle('rotate_theme')
    let par = document.querySelectorAll('p')
    if (img.classList.contains('rotate_theme')) {
        document.body.style.backgroundColor = 'white'
        footer.style.color = 'black'
        for (let i = 0; i < par.length; i++)
            par[i].style.color = 'black'
    }
    else {
        document.body.style.backgroundColor = ''
        footer.style.color = ''
        for (let i = 0; i < par.length; i++)
            par[i].style.color = ''
    }
}

window.addEventListener('mouseup', (event) => {
    if (event.target == document.getElementsByTagName('main')[0]) {
        mobile_nav.classList.remove('show_nav')
        menu.classList.remove('change')
    }
})

//mobile menu
function openMenu() {
    mobile_nav.classList.toggle('show_nav')
    menu.classList.toggle('change')
}

function birthday() {
    let ion = document.getElementById('ion').getElementsByClassName('bd')[0]
    let danu = document.getElementById('danu').getElementsByClassName('bd')[0]
    let alex = document.getElementById('alex').getElementsByClassName('bd')[0]

    ion.innerHTML = find_date('2000/12/26')
    danu.innerHTML = find_date('2001/06/19')
    alex.innerHTML = find_date('2002/06/27')
}

function find_date(string) {
    let today = new Date()
    let birth = new Date(string)
    let age = today.getFullYear() - birth.getFullYear()
    let m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--
    }
    return age
}