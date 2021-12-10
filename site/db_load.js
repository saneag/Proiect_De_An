const car_gal = document.getElementsByClassName('car_galery')[0]
const cars = document.getElementsByClassName('cars')
let temp_array = []
let obj = []
let form = document.getElementById('car_form')
let allCars = []
let encr = []

// form.addEventListener("submit", e => {
//     e.preventDefault()

//     let data = new FormData(form)

//     let marca = data.get('data[marca]')
//     let model = data.get('data[model]')
//     let anul = data.get('data[anul]')
//     let combustibil = data.get('data[combustibil]')
//     let capacitatea = data.get('data[capacitatea]')
//     let puterea = data.get('data[puterea]')
//     let tractiunea = data.get('data[tractiunea]')
//     let cutia = data.get('data[cutia]')
//     let pret = data.get('data[pret]')

//     //!!codul pentru criptare, pentru a cripta folosesti variabilele de mai sus
//     //exemplu
//     // let encrMarca = marca + criptarea
//     // let encrModel = model + criptarea
//     // let encrAnul = anul + criptarea
//     // let encrCombustibil = combustibil + criptarea
//     // let encrCapacitatea = capacitatea + criptarea
//     // let encrPuterea = puterea + criptarea
//     // let encrTractiunea = tractiunea + criptarea
//     // let encrCutia = cutia + criptarea
//     // let encrPret = pret + criptarea

//     //!!dupa ce termini de criptata, scoti din comentariu randurile de mai jos, acolo o sa fie incarcate datele in db

//     // data.set('data[marca]', encrMarca)
//     // data.set('data[model]', encrModel)
//     // data.set('data[anul]', encrAnul)
//     // data.set('data[combustibil]', encrCombustibil)
//     // data.set('data[capacitatea]', encrCapacitate)
//     // data.set('data[puterea]', encrPutere)
//     // data.set('data[tractiunea]', encrTractiune)
//     // data.set('data[cutia]', encrCutia)
//     // data.set('data[pret]', encrPret)

//     fetch(form.action, {
//         method: "POST",
//         body: data
//     }).then(
//         function (response) {
//             alert("Masina a fost adaugata!")
//         }
//     )
// });

//loading screen and some fixes
window.onload = () => {
    // fetch(form.action, {
    //     method: "GET"
    // }).then(response => response.json())
    //     .then((temp) => {
    //         obj = Object.entries(temp)
    //         obj.forEach(([key, value]) => {
    //             allCars.push(value) //aici se introduc valori ca marca ....
    //         });
    //     })
    window.scrollTo(0, 0)
    document.body.style.overflowY = 'hidden'


    setTimeout(() => {
        for (i in allCars[0]) {
            obj.push(i)
        }
        // console.log(obj)
        for (let i in allCars) {
            //aici faci decriptarea
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
            new_div = document.createElement('div')
            new_div.className = 'overlay'
            new_div.appendChild(document.createTextNode('Anul: ' + allCars[i].anul + ' Pretul: ' + allCars[i].pret + '$'))
            cars[i].appendChild(link)
            cars[i].appendChild(new_div)
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