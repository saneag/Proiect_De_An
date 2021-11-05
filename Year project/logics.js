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

class Car {
  constructor(options) {
    this.name = options.name;
    this.model = options.model;
    this.year = options.year;
    this.fuelType = options.fuelType;
    this.engineCapacity = options.engineCapacity;
    this.hp = options.hp;
    this.wheelDrive = options.wheelDrive;
    this.gearbox = options.gearbox;
    this.price = options.price;
  }
}

let allCars = [];
let tempSearch = []; 
let tempSearchFinal = [];

allCars[0] = alfaRomeo = new Car({
  name: 'Alfa Romeo',
  model: 'Stelvio Quadrifoglio',
  year: 2018,
  fuelType: 'benzin',
  engineCapacity: 2900,
  hp: 505,
  wheelDrive: 'integrala',
  gearbox: 'automat',
  price: 80000,
});

allCars[1] = alfaRomeo = new Car({
  name: 'Alfa Romeo',
  model: 'Giulia Quadrifoglio',
  year: 2017,
  fuelType: 'benzin',
  engineCapacity: 2900,
  hp: 505,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 87000,
});

allCars[2] = alfaRomeo = new Car({
  name: 'Alfa Romeo',
  model: '4C',
  year: 2014,
  fuelType: 'benzin',
  engineCapacity: 1700,
  hp: 240,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 55000,
});

allCars[3] = alfaRomeo = new Car({
  name: 'Alfa Romeo',
  model: '8C Competizione',
  year: 2007,
  fuelType: 'benzin',
  engineCapacity: 4700,
  hp: 450,
  wheelDrive: 'spate',
  gearbox: 'manual',
  price: 310000,
});

allCars[4] = astonMartin = new Car({
  name: 'Aston Martin',
  model: 'DB11',
  year: 2017,
  fuelType: 'benzin',
  engineCapacity: 5200,
  hp: 600,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 214000,
}); 

allCars[5] = astonMartin = new Car({
  name: 'Aston Martin',
  model: 'Vulcan',
  year: 2016,
  fuelType: 'benzin',
  engineCapacity: 7000,
  hp: 820,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 2300000,
}); 

allCars[6] = astonMartin = new Car({
  name: 'Aston Martin',
  model: 'Vantage GT12',
  year: 2016,
  fuelType: 'benzin',
  engineCapacity: 5900,
  hp: 600,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 385000,
}); 

allCars[7] = astonMartin = new Car({
  name: 'Aston Martin',
  model: 'DB10',
  year: 2015,
  fuelType: 'benzin',
  engineCapacity: 4700,
  hp: 430,
  wheelDrive: 'spate',
  gearbox: 'manual',
  price: 3430000,
}); 

allCars[8] = audi = new Car({
  name: 'Audi',
  model: 'R8 V10 Plus',
  year: 2016,
  fuelType: 'benzin',
  engineCapacity: 5200,
  hp: 610,
  wheelDrive: 'spate',
  gearbox: 'automat',
  price: 255000,
}); 

allCars[9] = audi = new Car({
  name: 'Audi',
  model: 'S1',
  year: 2015,
  fuelType: 'benzin',
  engineCapacity: 2000,
  hp: 231,
  wheelDrive: 'integrala',
  gearbox: 'manual',
  price: 23200,
}); 

function partitionByName(arr, start, end) 
{
    const pivotValue = arr[end].name;
    let pivotIndex = start;
    for (let i = start; i < end; i++) 
    {
      if (arr[i].name < pivotValue) 
      {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function partitionByModel(arr, start, end) 
{
    const pivotValue = arr[end].model;
    let pivotIndex = start;
    for (let i = start; i < end; i++) 
    {
      if (arr[i].model < pivotValue) 
      {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function partitionByYear(arr, start, end) 
{
  const pivotValue = arr[end].year;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].year < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByFuelType(arr, start, end) 
{
  const pivotValue = arr[end].fuelType;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].fuelType < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByEngineCapacity(arr, start, end) 
{
  const pivotValue = arr[end].engineCapacity;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].engineCapacity < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByHP(arr, start, end) 
{
  const pivotValue = arr[end].hp;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].hp < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByWheelDrive(arr, start, end) 
{
  const pivotValue = arr[end].wheelDrive;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].wheelDrive < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByGearbox(arr, start, end) 
{
  const pivotValue = arr[end].gearbox;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].gearbox < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionByPrice(arr, start, end) 
{
  const pivotValue = arr[end].price;
  let pivotIndex = start;
  for (let i = start; i < end; i++) 
  {
    if (arr[i].price < pivotValue) 
    {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function quickSort(arr, start, end, type) 
{
  let index;

  if (start >= end) 
  {
    return;
  }

  switch(type)
  {
    case '1':
      index = partitionByName(arr, start, end);
      break;
    case '2':
      index = partitionByModel(arr, start, end);
      break;
    case '3':
      index = partitionByYear(arr, start, end);
      break;
    case '4':
      index = partitionByFuelType(arr, start, end);
      break;
    case '5':
      index = partitionByEngineCapacity(arr, start, end);
      break;
    case '6':
      index = partitionByHP(arr, start, end);
      break;
    case '7':
      index = partitionByWheelDrive(arr, start, end);
      break;
    case '8':
      index = partitionByGearbox(arr, start, end);
      break;
    case '9':
      index = partitionByPrice(arr, start, end);
      break;
  }

  quickSort(arr, start, index - 1, type);
  quickSort(arr, index + 1, end, type);
}


function searching(arr, compName, compYearMin, compYearMax, 
  compCapacityMin, compCapacityMax, compHPMin, compHPMax,
  compPriceMin, compPriceMax) 
{
  let k = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i].name == compName) 
    {
      tempSearchFinal[k] = arr[i];
      k++;
    }
  }
  
  for (let i = 0; i < tempSearchFinal.length; i++) 
  {
    if (tempSearchFinal[i].year <= compYearMin)
      if (tempSearchFinal[i].year >= compYearMax)
    {
      tempSearchFinal.splice(i, 1);
    }
  }
  
  for (let i = 0; i < tempSearchFinal.length; i++) 
  {
    if (!(tempSearchFinal[i].engineCapacity >= compCapacityMin && tempSearchFinal[i].engineCapacity <= compCapacityMax))
    {
      tempSearchFinal.splice(i, 1);
    }
  }
 
  for (let i = 0; i < tempSearchFinal.length; i++) 
  {
    if (!(tempSearchFinal[i].hp >= compHPMin && tempSearchFinal[i].hp <= compHPMax))
    {
      tempSearchFinal.splice(i, 1);
    }
  }
  
  for (let i = 0; i < tempSearchFinal.length; i++) 
  {
    if (!(tempSearchFinal[i].price >= compPriceMin && tempSearchFinal[i].price <= compPriceMax))
    {
      tempSearchFinal.splice(i, 1);
    }
  }
 
  for (let i = 0; i < tempSearchFinal.length; i++) 
  {
    console.log(tempSearchFinal[i]);
  }
}


sortName.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "1");

  console.log("Sortare dupa nume:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortModel.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "2");

  console.log("Sortare dupa model:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortYear.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "3");

  console.log("Sortare dupa anul producerii:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortFuelType.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "4");

  console.log("Sortare dupa tipul combustibilului:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortEngineCapacity.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "5");

  console.log("Sortare dupa capacitatea motorului:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortHP.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "6");

  console.log("Sortare dupa puterea masinii:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortWheelDrive.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "7");

  console.log("Sortare dupa tipul tractiunii:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortGearbox.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "8");

  console.log("Sortare dupa tipul cutiei de viteze:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

sortPrice.addEventListener('click', () => {
  quickSort(allCars, 0, allCars.length - 1, "9");

  console.log("Sortare dupa pret:");
  for (let i = 0; i < allCars.length; i++) 
  {
    console.log(allCars[i]);
  }
})

search.addEventListener('click', () => {
  let inputName = document.getElementById("searchName").value;
  let inputYearMin = document.getElementById("searchYearMin").value;
  let inputYearMax = document.getElementById("searchYearMax").value;
  let inputCapacityMin = document.getElementById("searchCapacityMin").value;
  let inputCapacityMax = document.getElementById("searchCapacityMax").value;
  let inputHPMin = document.getElementById("searchHPMin").value;
  let inputHPMax = document.getElementById("searchHPMax").value;
  let inputPriceMin = document.getElementById("searchPriceMin").value;
  let inputPriceMax = document.getElementById("searchPriceMax").value;


  if(!inputName)
  {
    for (let i = 0; i < allCars.length; i++)
    {
      tempSearch[i] = allCars[i];
    }

    if(!inputYearMin)
    {
      inputYearMin = 0;
    }
    if(!inputYearMax)
    {
      inputYearMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputCapacityMin)
    {
      inputCapacityMin = 0;
    }
    if(!inputCapacityMax)
    {
      inputCapacityMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputHPMin)
    {
      inputHPMin = 0;
    }
    if(!inputHPMax)
    {
      inputHPMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputPriceMin)
    {
      inputPriceMin = 0;
    }
    if(!inputPriceMax)
    {
      inputPriceMax = Number.MAX_SAFE_INTEGER;
    }
 
    searching(tempSearch, inputName, inputYearMin, inputYearMax, 
      inputCapacityMin, inputCapacityMax, inputHPMin, inputHPMax, 
      inputPriceMin, inputPriceMax)
  }
  else
  {
    let j = 0;
    for(let i = 0; i < allCars.length; i++)
    {
      if (allCars[i].name == inputName) 
        {
          tempSearch[j] = allCars[i];
          j++
        }
    }
  
    if(!inputYearMin)
    {
      inputYearMin = 0;
    }
    if(!inputYearMax)
    {
      inputYearMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputCapacityMin)
    {
      inputCapacityMin = 0;
    }
    if(!inputCapacityMax)
    {
      inputCapacityMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputHPMin)
    {
      inputHPMin = 0;
    }
    if(!inputHPMax)
    {
      inputHPMax = Number.MAX_SAFE_INTEGER;
    }

    if(!inputPriceMin)
    {
      inputPriceMin = 0;
    }
    if(!inputPriceMax)
    {
      inputPriceMax = Number.MAX_SAFE_INTEGER;
    }

    searching(tempSearch, inputName, inputYearMin, inputYearMax, 
      inputCapacityMin, inputCapacityMax, inputHPMin, inputHPMax, 
      inputPriceMin, inputPriceMax)
  }

  tempSearch = [];
  tempSearchFinal = [];
})
