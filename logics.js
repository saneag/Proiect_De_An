const sortName = document.getElementById('sortName');
const sortModel = document.getElementById('sortModel');
const sortYear = document.getElementById('sortYear');
const sortFuelType = document.getElementById('sortFuelType');
const sortEngineCapacity = document.getElementById('sortEngineCapacity');
const sortHP = document.getElementById('sortHP');
const sortWheelDrive = document.getElementById('sortWheelDrive');
const sortGearbox = document.getElementById('sortGearbox');
const sortPrice = document.getElementById('sortPrice');
const search = document.getElementById('search');
let obj_items = []
let tempSearch = []
let tempSearchFinal = []

setTimeout(() => {
  for (j in allCars[0]) {
    obj_items.push(j)
  }
}, 1000)

function partition(arr, start, end, item) {
  let pivotValue = arr[end][item];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i][item] <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i][item] >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end, type) {
  let index;

  if (start >= end) return;

  switch (type) {
    case 1:
      index = partition(arr, start, end, obj_items[0]);
      break;
    case 2:
      index = partition(arr, start, end, obj_items[1]);
      break;
    case 3:
      index = partition(arr, start, end, obj_items[2]);
      break;
    case 4:
      index = partition(arr, start, end, obj_items[3]);
      break;
    case 5:
      index = partition(arr, start, end, obj_items[4]);
      break;
    case 6:
      index = partition(arr, start, end, obj_items[5]);
      break;
    case 7:
      index = partition(arr, start, end, obj_items[6]);
      break;
    case 8:
      index = partition(arr, start, end, obj_items[7]);
      break;
    case 9:
      index = partition(arr, start, end, obj_items[8]);
      break;
  }

  quickSort(arr, start, index - 1, type);
  quickSort(arr, index + 1, end, type);
}

let ascending = true;
let iterationCnt = 0;
let qqq = true

function show_cars_help(q) {
  if (qqq == true) {
    searching_alg(1)
    qqq = false
  }
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, q);
  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < allCars.length; j++) {
      if (allCars[j] == tempSearchFinal[i]) {
        temp_array[i] = j
      }
    }
  }
  display_help()
  if (ascending == false) {
    ascending = true;
  }
  else {
    ascending = false;
  }
}

sortName.addEventListener('click', () => {
  show_cars_help(1)
})

sortModel.addEventListener('click', () => {
  show_cars_help(2)
})

sortYear.addEventListener('click', () => {
  show_cars_help(3)
})

sortFuelType.addEventListener('click', () => {
  show_cars_help(4)
})

sortEngineCapacity.addEventListener('click', () => {
  show_cars_help(5)
})

sortHP.addEventListener('click', () => {
  show_cars_help(6)
})

sortWheelDrive.addEventListener('click', () => {
  show_cars_help(7)
})

sortGearbox.addEventListener('click', () => {
  show_cars_help(8)
})

sortPrice.addEventListener('click', () => {
  show_cars_help(9)
})

function searching(arr, compName, compYearMin, compYearMax,
  compCapacityMin, compCapacityMax, compHPMin, compHPMax,
  compPriceMin, compPriceMax, type) {
  //type: 1 - inputName nu avem
  //      2 - inputName avem
  if (type == 2) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].marca.toLowerCase() == compName.toLowerCase() || arr[i].marca.split(' ')[0].toLowerCase() == compName.toLowerCase() || arr[i].marca.split(' ')[1].toLowerCase() == compName.toLowerCase()) {
        tempSearchFinal[k] = arr[i];
        k++;
      }
    }
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      tempSearchFinal[i] = arr[i];
    }
  }

  removeIndex = 0;
  while (removeIndex < tempSearchFinal.length) {
    if (tempSearchFinal[removeIndex].anul > compYearMax || tempSearchFinal[removeIndex].anul < compYearMin) {
      tempSearchFinal.splice(removeIndex, 1);
      removeIndex--;
    }
    removeIndex++;
  }

  removeIndex = 0;
  while (removeIndex < tempSearchFinal.length) {
    if (tempSearchFinal[removeIndex].capacitatea > compCapacityMax || tempSearchFinal[removeIndex].capacitatea < compCapacityMin) {
      tempSearchFinal.splice(removeIndex, 1);
      removeIndex--;
    }
    removeIndex++;
  }

  removeIndex = 0;
  while (removeIndex < tempSearchFinal.length) {
    if (tempSearchFinal[removeIndex].puterea > compHPMax || tempSearchFinal[removeIndex].puterea < compHPMin) {
      tempSearchFinal.splice(removeIndex, 1);
      removeIndex--;
    }
    removeIndex++;
  }

  removeIndex = 0;
  while (removeIndex < tempSearchFinal.length) {
    if (tempSearchFinal[removeIndex].pret > compPriceMax || tempSearchFinal[removeIndex].pret < compPriceMin) {
      tempSearchFinal.splice(removeIndex, 1);
      removeIndex--;
    }
    removeIndex++;
  }
}

function searching_alg(temp) {
  tempSearch = [];
  tempSearchFinal = [];

  let inputName = document.getElementById("searchName").value;
  let inputYearMin = document.getElementById("searchYearMin").value;
  let inputYearMax = document.getElementById("searchYearMax").value;
  let inputCapacityMin = document.getElementById("searchCapacityMin").value;
  let inputCapacityMax = document.getElementById("searchCapacityMax").value;
  let inputHPMin = document.getElementById("searchHPMin").value;
  let inputHPMax = document.getElementById("searchHPMax").value;
  let inputPriceMin = document.getElementById("searchPriceMin").value;
  let inputPriceMax = document.getElementById("searchPriceMax").value;

  if (!inputName) {
    
    tempSearch = [...allCars]

    if (!inputYearMin) {
      inputYearMin = 0;
    }
    if (!inputYearMax) {
      inputYearMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputCapacityMin) {
      inputCapacityMin = 0;
    }
    if (!inputCapacityMax) {
      inputCapacityMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputHPMin) {
      inputHPMin = 0;
    }
    if (!inputHPMax) {
      inputHPMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputPriceMin) {
      inputPriceMin = 0;
    }
    if (!inputPriceMax) {
      inputPriceMax = Number.MAX_SAFE_INTEGER;
    }

    searching(tempSearch, inputName, inputYearMin, inputYearMax,
      inputCapacityMin, inputCapacityMax, inputHPMin, inputHPMax,
      inputPriceMin, inputPriceMax, 1)
  }
  else {
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].marca.toLowerCase() == inputName.toLowerCase() || allCars[i].marca.split(' ')[0].toLowerCase() == inputName.toLowerCase() || (allCars[i].marca.split(' ')[1] ? allCars[i].marca.split(' ')[1].toLowerCase() == inputName.toLowerCase() : false)) {
        tempSearch.push(allCars[i]);
      }
    }

    if (!inputYearMin) {
      inputYearMin = 0;
    }
    if (!inputYearMax) {
      inputYearMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputCapacityMin) {
      inputCapacityMin = 0;
    }
    if (!inputCapacityMax) {
      inputCapacityMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputHPMin) {
      inputHPMin = 0;
    }
    if (!inputHPMax) {
      inputHPMax = Number.MAX_SAFE_INTEGER;
    }

    if (!inputPriceMin) {
      inputPriceMin = 0;
    }
    if (!inputPriceMax) {
      inputPriceMax = Number.MAX_SAFE_INTEGER;
    }

    searching(tempSearch, inputName, inputYearMin, inputYearMax,
      inputCapacityMin, inputCapacityMax, inputHPMin, inputHPMax,
      inputPriceMin, inputPriceMax, 2)
  }
  if (temp == 0) {
    if (tempSearchFinal.length == 0) {
      alert("Nu avem nici o masina de genu!")
      return;
    }
    temp_array = new Array()
    delete_main_cars()
    for (let i = 0; i < tempSearchFinal.length; i++) {
      for (let j = 0; j < allCars.length; j++) {
        if (allCars[j] == tempSearchFinal[i]) {
          temp_array[i] = j
        }
      }
    }
    display_help()
  }
}

// Criptare

let viginereCipher = new Array(36);

for (let i = 0; i < viginereCipher.length; i++) {
  viginereCipher[i] = new Array(36);
}

let rowTable = columnTable = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


let key = [];

//generare cheita random

//let keyLength = Math.floor(Math.random() * 4 + 3);

//console.log("Key length: ",keyLength);

// for (let i = 0; i < keyLength; i++) {
//     letterIndex = Math.floor(Math.random() * 36);
//     //console.log(letterIndex);
//     //console.log(rowTable[letterIndex]);
//     key[i] = rowTable[letterIndex];
// }

key = ['P', 'E', 'A', 'C', 'H']
let keyLength = key.length

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

  let keyStream = [];

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

  return cryptedString.join('');
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

  for (let i = 0; i < keyStreamDecrypt.length; i++) {
    for (let j = 0; j < viginereCipher.length; j++) {
      if (keyStreamDecrypt[i] == viginereCipher[0][j]) {
        keyStreamDecrypt[i] = j;
        break;
      }
    }
  }

  let decryptedString = []

  for (let i = 0; i < keyStreamDecrypt.length; i++) {
    if (stringTestDecrypt[i] == " ") {
      decryptedString[i] = " ";
    }
    for (let j = 0; j < viginereCipher.length; j++) {
      if (stringTestDecrypt[i] == viginereCipher[0][j]) {
        if (keyStreamDecrypt[i] > j) {
          decryptedString[i] = viginereCipher[0][viginereCipher.length - (keyStreamDecrypt[i] - j)]
          break;
        }
        decryptedString[i] = viginereCipher[0][j - keyStreamDecrypt[i]];
        break;
      }
    }
  }
  decryptedString = decryptedString.join('').toLowerCase().split(' ')
  for (let i = 0; i < decryptedString.length; i++) {
    decryptedString[i] = decryptedString[i].charAt(0).toUpperCase() + decryptedString[i].substring(1)
  }
  return decryptedString.join(' ');
}