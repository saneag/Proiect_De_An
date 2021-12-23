const car_gal = document.getElementsByClassName('car_galery')[0]
const cars = document.getElementsByClassName('cars')
let temp_array = []
let obj = []
let form = document.getElementById('car_form')
let allCars = []
let encr = []

form.addEventListener("submit", e => {
    e.preventDefault()

    let data = new FormData(form)

    let marca = data.get('data[marca]')
    let model = data.get('data[model]')
    let anul = data.get('data[anul]')
    let combustibil = document.getElementById('combustibil').value
    let capacitatea = data.get('data[capacitatea]')
    let puterea = data.get('data[puterea]')
    let tractiunea = document.getElementById('tractiunea').value
    let cutia = document.getElementById('Manuala').checked ? 'Manuala' : 'Automata'
    let pret = data.get('data[pret]')
    let link = data.get('data[link]')

    let encrMarca = crypt(marca.toUpperCase())
    let encrModel = crypt(model.toUpperCase())
    let encrAnul = crypt(anul)
    let encrCombustibil = crypt(combustibil.toUpperCase())
    let encrCapacitatea = crypt(capacitatea)
    let encrPuterea = crypt(puterea)
    let encrTractiunea = crypt(tractiunea.toUpperCase())
    let encrCutia = crypt(cutia.toUpperCase())
    let encrPret = crypt(pret)

    data.set('data[marca]', encrMarca)
    data.set('data[model]', encrModel)
    data.set('data[anul]', encrAnul)
    data.set('data[combustibil]', encrCombustibil)
    data.set('data[capacitatea]', encrCapacitatea)
    data.set('data[puterea]', encrPuterea)
    data.set('data[tractiunea]', encrTractiunea)
    data.set('data[cutia]', encrCutia)
    data.set('data[pret]', encrPret)

    fetch(form.action, {
        method: "POST",
        body: data
    }).then(
        function (response) {
            alert("Masina a fost adaugata!")
            delete_input()
        }
    )
});

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

        obj = []
        for (let i in allCars[0])
            obj.push(i)

        for (let i in allCars) {
            for (let j = 0; j < 9; j++) {
                if (obj[j] == 'anul' || obj[j] == 'capacitatea' || obj[j] == 'puterea' || obj[j] == 'pret')
                    allCars[i][obj[j]] = parseInt(decrypt(allCars[i][obj[j]]))
                else
                    allCars[i][obj[j]] = decrypt(allCars[i][obj[j]])
            }
        }
        for (let i = 0; i < allCars.length; i++) {
            link = document.createElement('a')
            link.href = 'javascript:void(0)'
            image = document.createElement('img')
            par = document.createElement('p')
            new_div = document.createElement('div')
            new_div.className = 'cars'
            new_div.id = 'car' + (i + 1)
            image.src = allCars[i].link
            if (i >= 20) {
                image.setAttribute('loading', 'lazy')
            }
            par.textContent = allCars[i].marca + ' ' + allCars[i].model
            link.appendChild(image)
            link.appendChild(par)
            car_gal.appendChild(new_div)
            new_div = document.createElement('div')
            new_div.className = 'overlay'
            link.appendChild(new_div)
            let temp_price = allCars[i].pret
            temp_price = temp_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
            new_div.appendChild(document.createTextNode(`Anul: ${allCars[i].anul} \xa0 Pretul: ${temp_price} $`))
            cars[i].appendChild(link)
            temp_array[i] = i
        }
        document.getElementsByClassName('loading')[0].style.visibility = 'hidden'
        document.getElementsByClassName('loading')[0].style.opacity = '0'
        document.body.style.overflowY = ''
        let script_el = document.createElement('script')
        script_el.src = './script.js'
        document.body.appendChild(script_el)
    }, 2000)
}