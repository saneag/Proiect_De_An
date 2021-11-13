class Car {
    constructor(options) {
        this.marca = options.marca
        this.model = options.model
        this.anul = options.anul
        this.combustibil = options.combustibil
        this.capacitatea = options.capacitatea
        this.puterea = options.puterea
        this.tractiunea = options.tractiunea
        this.cutia = options.cutia
        this.pret = options.pret
    }
}

const allCars = new Array();

allCars[0] = new Car({
    marca: 'Alfa Romeo',
    model: 'Stelvio Quadrifoglio',
    anul: 2018,
    combustibil: 'benzin',
    capacitatea: 2900,
    puterea: 505,
    tractiunea: 'integral',
    cutia: 'automat',
    pret: 80000
});

allCars[1] = new Car({
    marca: 'Alfa Romeo',
    model: 'Giulia Quadrifoglio',
    anul: 2017,
    combustibil: 'benzin',
    capacitatea: 2900,
    puterea: 505,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 87000
});

allCars[2] = new Car({
    marca: 'Alfa Romeo',
    model: '4C',
    anul: 2014,
    combustibil: 'benzin',
    capacitatea: 1700,
    puterea: 240,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 55000
});

allCars[3] = new Car({
    marca: 'Alfa Romeo',
    model: '8C Competizione',
    anul: 2007,
    combustibil: 'benzin',
    capacitatea: 4700,
    puterea: 450,
    tractiunea: 'spate',
    cutia: 'manual',
    pret: 310000
});

allCars[4] = new Car({
    marca: 'Aston Martin',
    model: 'DB11',
    anul: 2017,
    combustibil: 'benzin',
    capacitatea: 5200,
    puterea: 600,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 214000
});
allCars[5] = new Car({
    marca: 'Aston Martin',
    model: 'Vulcan',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 7000,
    puterea: 820,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 2300000
});
allCars[6] = new Car({
    marca: 'Aston Martin',
    model: 'Vantage GT12',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 5900,
    puterea: 600,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 385000
});
allCars[7] = new Car({
    marca: 'Aston Martin',
    model: 'DB10',
    anul: 2015,
    combustibil: 'benzin',
    capacitatea: 4700,
    puterea: 430,
    tractiunea: 'spate',
    cutia: 'manual',
    pret: 3430000
});
allCars[8] = new Car({
    marca: 'Audi',
    model: 'R8 V10 Plus',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 5200,
    puterea: 610,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 255000
});
allCars[9] = new Car({
    marca: 'Audi',
    model: 'S1',
    anul: 2015,
    combustibil: 'benzin',
    capacitatea: 2000,
    puterea: 231,
    tractiunea: 'integral',
    cutia: 'manual',
    pret: 23200
});
allCars[10] = new Car({
    marca: 'Audi',
    model: 'RS 6 Avant',
    anul: 2015,
    combustibil: 'benzin',
    capacitatea: 4000,
    puterea: 560,
    tractiunea: 'integral',
    cutia: 'automat',
    pret: 117700
});
allCars[11] = new Car({
    marca: 'Audi',
    model: 'TTS Coupe',
    anul: 2015,
    combustibil: 'benzin',
    capacitatea: 2000,
    puterea: 265,
    tractiunea: 'integral',
    cutia: 'automat',
    pret: 49000
});
allCars[12] = new Car({
    marca: 'Audi',
    model: 'RS 6',
    anul: 2009,
    combustibil: 'benzin',
    capacitatea: 4200,
    puterea: 580,
    tractiunea: 'fata',
    cutia: 'automat',
    pret: 32000
});
allCars[13] = new Car({
    marca: 'Audi',
    model: 'RS 4',
    anul: 2006,
    combustibil: 'benzin',
    capacitatea: 4200,
    puterea: 420,
    tractiunea: 'integrala',
    cutia: 'manual',
    pret: 18000

});
allCars[14] = new Car({
    marca: 'Audi',
    model: 'RS 6',
    anul: 2009,
    combustibil: 'benzin',
    capacitatea: 5000,
    puterea: 579,
    tractiunea: 'fata',
    cutia: 'automat',
    pret: 36000
});
allCars[15] = new Car({
    marca: 'Audi',
    model: 'RS 5',
    anul: 2019,
    combustibil: 'benzin',
    capacitatea: 2900,
    puterea: 450,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 61000
});
allCars[16] = new Car({
    marca: 'Audi',
    model: 'RS Q8',
    anul: 2019,
    combustibil: 'benzin',
    capacitatea: 4000,
    puterea: 600,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 135000
});
allCars[17] = new Car({
    marca: 'BMW',
    model: 'i8',
    anul: 2019,
    combustibil: 'hybrid',
    capacitatea: 1500,
    puterea: 374,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 150000
});
allCars[18] = new Car({
    marca: 'BMW',
    model: 'M2 Coupe',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 3000,
    puterea: 365,
    tractiunea: 'spate',
    cutia: 'manual',
    pret: 50000
});
allCars[19] = new Car({
    marca: 'BMW',
    model: 'M4 GTS',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 3000,
    puterea: 493,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 134000
});
allCars[20] = new Car({
    marca: 'BMW',
    model: 'M8',
    anul: 2022,
    combustibil: 'benzin',
    capacitatea: 4400,
    puterea: 617,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 180000
});
allCars[21] = new Car({
    marca: 'Audi',
    model: 'Q8',
    anul: 2019,
    combustibil: 'diesel',
    capacitatea: 3000,
    puterea: 249,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 112000
})
allCars[22] = new Car({
    marca: 'BMW',
    model: 'M50D',
    anul: 2022,
    combustibil: 'diesel',
    capacitatea: 3000,
    puterea: 400,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 130000
})
allCars[23] = new Car({
    marca: 'BMW',
    model: 'X5',
    anul: 2006,
    combustibil: 'diesel',
    capacitatea: 3000,
    puterea: 225,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 5000
})
allCars[24] = new Car({
    marca: 'Mercedes Benz',
    model: 'X CLASS',
    anul: 2018,
    combustibil: 'diesel',
    capacitatea: 2300,
    puterea: 190,
    tractiunea: 'integrala',
    cutia: 'automat',
    pret: 60000
})
allCars[25] = new Car({
    marca: 'Mercedes Benz',
    model: 'CLS',
    anul: 2018,
    combustibil: 'diesel',
    capacitatea: 2000,
    puterea: 240,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 84000
})
allCars[26] = new Car({
    marca: 'Chevrolet Corvette',
    model: 'Stingray Coupe',
    anul: 2020,
    combustibil: 'benzin',
    capacitatea: 6200,
    puterea: 500,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 80000
})
allCars[27] = new Car({
    marca: 'Dodge',
    model: 'Viper ACR',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 8000,
    puterea: 645,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 118000
})
allCars[28] = new Car({
    marca: 'Dodge',
    model: 'Hellcat SRT',
    anul: 2016,
    combustibil: 'benzin',
    capacitatea: 6200,
    puterea: 717,
    tractiunea: 'spate',
    cutia: 'automat',
    pret: 81000
})
// allCars[29] = new Car({

// })
// allCars[30] = new Car({

// })
// allCars[31] = new Car({

// })
// allCars[32] = new Car({

// })
// allCars[33] = new Car({

// })
// allCars[34] = new Car({

// })
// allCars[35] = new Car({

// })
// allCars[36] = new Car({

// })
// allCars[37] = new Car({

// })
// allCars[38] = new Car({

// })
// allCars[39] = new Car({

// })
// allCars[40] = new Car({

// })
// allCars[41] = new Car({

// })
// allCars[42] = new Car({

// })
// allCars[43] = new Car({

// })
// allCars[44] = new Car({

// })
// allCars[45] = new Car({

// })
// allCars[46] = new Car({

// })
// allCars[47] = new Car({

// })
// allCars[48] = new Car({

// })
// allCars[49] = new Car({

// })
// allCars[50] = new Car({

// })