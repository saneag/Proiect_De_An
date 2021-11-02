class Car {
  constructor(options) {
    this.name = options.name;
    this.year = options.year;
    this.engineCapacity = options.engineCapacity;
  }
}

let allCars = [];

allCars[0] = audi = new Car({
  name: "audi",
  year: 2012,
  engineCapacity: 2000,
});

allCars[1] = bmw = new Car({
  name: "bmw",
  year: 2019,
  engineCapacity: 2500,
});

allCars[2] = volkswagen = new Car({
  name: "volkswagen",
  year: 2011,
  engineCapacity: 1400,
});

allCars[3] = mercedes = new Car({
  name: "mercedes",
  year: 2015,
  engineCapacity: 2200,
});

allCars[4] = mercedes = new Car({
  name: "dacia",
  year: 2007,
  engineCapacity: 1500,
});

console.log("Sortare dupa capacitatea motorului:");

quickSort(allCars, 0, allCars.length - 1, "3");

for (let i = 0; i < allCars.length; i++) 
{
  console.log(allCars[i]);
}

console.log("Sortare dupa anul producerii:");

quickSort(allCars, 0, allCars.length - 1, "2");

for (let i = 0; i < allCars.length; i++) 
{
  console.log(allCars[i]);
}

console.log("Sortare dupa nume:");

quickSort(allCars, 0, allCars.length - 1, "1");

for (let i = 0; i < allCars.length; i++) 
{
  console.log(allCars[i]);
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

function quickSort(arr, start, end, type) {
  let index;

  if (start >= end) {
    return;
  }

  if (type == "3") 
  {
    index = partitionByEngineCapacity(arr, start, end);
  } 
  else if (type == "2") 
  {
    index = partitionByYear(arr, start, end);
  }
  else if (type == "1") 
  {
    index = partitionByName(arr, start, end);
  }

  quickSort(arr, start, index - 1, type);
  quickSort(arr, index + 1, end, type);
}

console.log("Cautare dupa nume:");
searching1(allCars, "bmw", "1");

console.log("Cautare dupa an:")
searching2(allCars, 2011, 2020, "2")

console.log("Cautare dupa capacitatea motorului:")
searching2(allCars, 1400, 2000, "3")

function searching1(arr, compCrt, type) 
{
  for (let i = 0; i < allCars.length; i++) 
  {
    if (type == "1") 
    {
      if (arr[i].name == compCrt) 
      {
        console.log(arr[i]);
      }
    }
  }
}

function searching2(arr, compCrtMin, compCrtMax, type) 
{
  for (let i = 0; i < allCars.length; i++) 
  {
    if (type == "2") 
    {
      if (arr[i].year >= compCrtMin && arr[i].year <= compCrtMax) 
      {
        console.log(arr[i]);
      }
    }

    else if (type == "3") 
    {
      if (arr[i].engineCapacity >= compCrtMin && arr[i].engineCapacity <= compCrtMax) 
      {
        console.log(arr[i]);
      }
    }
  }
}

