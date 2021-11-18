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

function partitionByName(arr, start, end) {
  const pivotValue = arr[end].marca;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].marca <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].marca >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByModel(arr, start, end) {
  const pivotValue = arr[end].model;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].model <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].model >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByYear(arr, start, end) {
  const pivotValue = arr[end].anul;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].anul <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].anul >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByFuelType(arr, start, end) {
  const pivotValue = arr[end].combustibil;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].combustibil <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].combustibil >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByEngineCapacity(arr, start, end) {
  const pivotValue = arr[end].capacitate;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].capacitate <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].capacitate >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByHP(arr, start, end) {
  const pivotValue = arr[end].puterea;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].puterea <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].puterea >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByWheelDrive(arr, start, end) {
  const pivotValue = arr[end].tractiunea;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].tractiunea <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].tractiunea >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByGearbox(arr, start, end) {
  const pivotValue = arr[end].cutia;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].cutia <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].cutia >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByPrice(arr, start, end) {
  const pivotValue = arr[end].pret;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (ascending == true) {
      if (arr[i].pret <= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
    else {
      if (arr[i].pret >= pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end, type, ascending) {
  let index;

  if (start >= end) return;

  switch (type) {
    case '1':
      index = partitionByName(arr, start, end, ascending);
      break;
    case '2':
      index = partitionByModel(arr, start, end, ascending);
      break;
    case '3':
      index = partitionByYear(arr, start, end, ascending);
      break;
    case '4':
      index = partitionByFuelType(arr, start, end, ascending);
      break;
    case '5':
      index = partitionByEngineCapacity(arr, start, end, ascending);
      break;
    case '6':
      index = partitionByHP(arr, start, end, ascending);
      break;
    case '7':
      index = partitionByWheelDrive(arr, start, end, ascending);
      break;
    case '8':
      index = partitionByGearbox(arr, start, end, ascending);
      break;
    case '9':
      index = partitionByPrice(arr, start, end, ascending);
      break;
  }

  quickSort(arr, start, index - 1, type, ascending);
  quickSort(arr, index + 1, end, type, ascending);
}

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
    if (tempSearchFinal[removeIndex].capacitate > compCapacityMax || tempSearchFinal[removeIndex].capacitate < compCapacityMin) {
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

let ascending = true;
let iterationCnt = 0;

sortName.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "1", ascending);
  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortModel.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "2", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortYear.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "3", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortFuelType.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "4", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortEngineCapacity.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "5", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortHP.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "6", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortWheelDrive.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "7", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortGearbox.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "8", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

sortPrice.addEventListener('click', () => {
  searching_alg(1)
  quickSort(tempSearchFinal, 0, tempSearchFinal.length - 1, "9", ascending);

  delete_main_cars()
  for (let i = 0; i < tempSearchFinal.length; i++) {
    for (let j = 0; j < tempSearchFinal.length; j++) {
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
})

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
    for (let i = 0; i < allCars.length; i++) {
      tempSearch[i] = allCars[i];
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
      inputPriceMin, inputPriceMax, 1)
  }
  else {
    let j = 0;
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].marca.toLowerCase() == inputName.toLowerCase() || allCars[i].marca.split(' ')[0].toLowerCase() == inputName.toLowerCase() || (allCars[i].marca.split(' ')[1] ? allCars[i].marca.split(' ')[1].toLowerCase() == inputName.toLowerCase() : false)) {
        tempSearch[j] = allCars[i];
        j++
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
    console.log(tempSearchFinal)
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

