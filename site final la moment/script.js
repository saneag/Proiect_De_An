// const cars = document.getElementsByClassName('cars')
const myModal = document.getElementById('myModal')
const modal_content = document.getElementById('modal_content')
const inp = document.querySelectorAll('input')
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
for (let i = 0; i < cars.length; i++) {
    cars[i].addEventListener('click', () => {
        display_modal(temp_array[i])
    })
}

function display_modal(x) {
    myModal.style.visibility = 'visible'
    myModal.style.opacity = '1'
    let id = 'car' + (x + 1)
    let txt = ''
    display_img(x)
    new_div = document.createElement('div')
    for (let i in allCars[x]) {
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
    img.src = './images/' + (i + 1) + '.webp'
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
    image.src = './images/' + (i + 1) + '.webp'
    par.textContent = allCars[i].marca + ' ' + allCars[i].model
    link.appendChild(image)
    link.appendChild(par)
    new_div = document.createElement('div')
    new_div.className = 'overlay'
    let temp_price = allCars[i].pret
    temp_price = temp_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    new_div.appendChild(document.createTextNode(`Anul: ${allCars[i].anul} \xa0 Pretul: ${temp_price} $`))
    cars[a].appendChild(link)
    cars[a].appendChild(new_div)
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
        add.style.visibility = 'visible'
        add.style.opacity = 1
    }
    if (x == 'ca') {
        add.style.visibility = 'hidden'
        add.style.opacity = 0
    }
}


// Criptare

let viginereCipher = new Array(36);

for (let i = 0; i < viginereCipher.length; i++) {
  viginereCipher[i] = new Array(36);
}

let rowTable = columnTable = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                              "1","2","3","4","5","6","7","8","9","0"];

let key = [];
let keyLength = Math.floor(Math.random() * 4 + 3);
                          
console.log("Key length: ",keyLength);
                          
for (let i = 0; i < keyLength; i++) {
    letterIndex = Math.floor(Math.random() * 36);
    //console.log(letterIndex);
    //console.log(rowTable[letterIndex]);
    key[i] = rowTable[letterIndex];
}
                          
console.log("\n");
                          
for (let i = 0; i < keyLength; i++) {
    console.log(key[i]);
}


function crypt(stringTestCrypt) {
  let i1 = 0;
  let j1 = 0;
  let l1 = 0;
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 36; j++) {
      viginereCipher[i][j] = rowTable[i1 + j1];
      j1++;
      if (viginereCipher[i][j] == undefined) {
        viginereCipher[i][j] = rowTable[l1];
        l1++;
      }
    }
    i1++;
    j1 = 0;
    l1 = 0;
  }


//   for (let i = 0; i < 36; i++) {
//     for (let j = 0; j < 36; j++) {
//       console.log(viginereCipher[i][j], " ");
//     }
//     console.log("\n");
//   }


  //let stringTestCrypt = "BMW E38";


  let keyStream = [];

  console.log(stringTestCrypt);

  let cntKeyStream = 0;
  let tempI = 0;
  for (let i = 0; i < stringTestCrypt.length; i++) {
    if (tempI == key.length) {
      cntKeyStream = 0;
      tempI = 0;
    }
    keyStream[i] = key[cntKeyStream];
    cntKeyStream++;
    tempI++;
  }

  console.log("Cheita", keyStream);

  let cryptedString = [];

  for (let k = 0; k < stringTestCrypt.length; k++) {
    if (stringTestCrypt[k] == " ") {
      cryptedString[k] = " ";
    }
    for (let i = 0; i < rowTable.length; i++) {
      if (stringTestCrypt[k] == rowTable[i]) {
        for (let j = 0; j < columnTable.length; j++) {
          if (keyStream[k] == columnTable[j]) {
            cryptedString[k] = viginereCipher[i][j];
            break;
          }
        }
      }
    }
  }

  console.log("Criptat", cryptedString);
  
  return cryptedString;
}


function decrypt(stringTestDecrypt) {
    let i1 = 0;
    let j1 = 0;
    let l1 = 0;
    for (let i = 0; i < 36; i++) {
      for (let j = 0; j < 36; j++) {
        viginereCipher[i][j] = rowTable[i1 + j1];
        j1++;
        if (viginereCipher[i][j] == undefined) {
          viginereCipher[i][j] = rowTable[l1];
          l1++;
        }
      }
      i1++;
      j1 = 0;
      l1 = 0;
    }

    let keyStreamDecrypt = [];

    let cntKeyStream = 0;
    let tempI = 0;
    for (let i = 0; i < stringTestDecrypt.length; i++) {
        if (tempI == key.length) {
            cntKeyStream = 0;
            tempI = 0;
        }
    keyStreamDecrypt[i] = key[cntKeyStream];
    cntKeyStream++;
    tempI++;
    }

    //console.log("Cheita pentru decriptare", keyStreamDecrypt);

    for (let i = 0; i < keyStreamDecrypt.length; i++) {
        for (let j = 0; j < viginereCipher.length; j++)
        {
            if(keyStreamDecrypt[i] == viginereCipher[0][j])
            {
                keyStreamDecrypt[i] = j;
                break;
            }
        }   
    }

    console.log("\nCheita pentru decriptare dupa indexi", keyStreamDecrypt);

    let decryptedString = []

    //debugger
    for (let i = 0; i < keyStreamDecrypt.length; i++) {
        if(stringTestDecrypt[i] == " ")
            {
                decryptedString[i] = " ";
            }
        for (let j = 0; j < viginereCipher.length; j++){
            if(stringTestDecrypt[i] == viginereCipher[0][j])
            {
                if(keyStreamDecrypt[i] > j)
                {
                    decryptedString[i] = viginereCipher[0][viginereCipher.length - (keyStreamDecrypt[i] - j)]
                    break;
                }
                decryptedString[i] = viginereCipher[0][j-keyStreamDecrypt[i]];
                break;
            }
        }
    }

    console.log("Decriptat: ",decryptedString)
}


let cryptedNameCar = crypt("PROIECT DE AN 1");

decrypt(cryptedNameCar)