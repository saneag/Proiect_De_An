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

    let curr_time = new Date()

    ion.innerHTML = curr_time.getFullYear() - 2000
    danu.innerHTML = curr_time.getFullYear() - 2001
    alex.innerHTML = curr_time.getFullYear() - 2002
}