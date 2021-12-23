fetch('./offline db/cars.json').then(response => {
    return response.json()
}).then((temp) => {
    obj = Object.entries(temp)
    obj.forEach(([key, value]) => {
        allCars.push(value)
    });
})