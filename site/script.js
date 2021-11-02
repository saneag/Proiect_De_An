window.onload = () => {
    display()
}

class Cars {
    constructor(marca, model, greutate, volum, culoare) {
        this.marca = marca
        this.model = model
        this.greutate = greutate
        this.volum = volum
        this.culoare = culoare
    }
}

let arr = []
arr[0] = new Cars('bmw', 'm5', 2500, 3.2, 'alb')
arr[1] = new Cars('bmw', 'm4', 3000, 5, 'negru')
arr[2] = new Cars('bmw', 'm3', 2200, 2, 'galben')
arr[3] = new Cars('bmw', 'm4', 2800, 6.2, 'albastru')


function Sort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].greutate < arr[j].greutate) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    element.replaceWith(element)
    display()
}

let par, car_info, element
function display() {
    for (let i = 0; i < arr.length; i++) {
        par = document.createElement("p")
        car_info = document.createTextNode(arr[i].marca + ' ' + arr[i].model + ' ' + arr[i].greutate)
        par.appendChild(car_info)
        element = document.getElementById("cars")
        element.appendChild(par)
    }
}