const car_gal = document.getElementsByClassName('car_galery')[0]
const cars = document.getElementsByClassName('cars')
let temp_array = []
let form = document.getElementById('car_form')
let obj = []
let allCars = []

form.addEventListener("submit", e => {
    e.preventDefault()

    let data = new FormData(form)

    fetch(form.action, {
        method: "POST",
        body: data
    }).then(
        function (response) {
            console.log(response.json())
        }
    )
});

//loading screen and some fixes
window.onload = () => {
    fetch(form.action, {
        method: "GET"
    }).then(response => response.json())
        .then((temp) => {
            obj = Object.entries(temp)
            obj.forEach(([key, value]) => {
                allCars.push(value)
            });
        })
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'


    setTimeout(() => {
        for (let i in allCars) {
            //aici faci criptarea
            console.log(allCars[i])
        }
        for (let i = 0; i < allCars.length; i++) {
            link = document.createElement('a')
            link.href = 'javascript:void(0)'
            image = document.createElement('img')
            par = document.createElement('p')
            new_div = document.createElement('div')
            new_div.className = 'cars'
            new_div.id = 'car' + (i + 1)
            image.src = './images/' + (i + 1) + '.webp'
            par.textContent = allCars[i].marca + ' ' + allCars[i].model
            link.appendChild(image)
            link.appendChild(par)
            car_gal.appendChild(new_div)
            cars[i].appendChild(link)
            temp_array[i] = i
        }
        document.getElementsByClassName('loading')[0].style.visibility = 'hidden'
        document.getElementsByClassName('loading')[0].style.opacity = '0'
        document.body.style.overflowY = ''
        let script_el = document.createElement('script')
        script_el.type = 'text/javascript'
        script_el.src = './script.js'
        document.body.appendChild(script_el)
        script_el = document.createElement('script')
        script_el.type = 'text/javascript'
        script_el.src = './logics.js'
        document.body.appendChild(script_el)
    }, 2000)
}