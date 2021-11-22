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
    combustibil: 'Benzin',
    capacitatea: 2900,
    puterea: 505,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 80000
});

allCars[1] = new Car({
    marca: 'Alfa Romeo',
    model: 'Giulia Quadrifoglio',
    anul: 2017,
    combustibil: 'Benzin',
    capacitatea: 2900,
    puterea: 505,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 87000
});

allCars[2] = new Car({
    marca: 'Alfa Romeo',
    model: '4C',
    anul: 2014,
    combustibil: 'Benzin',
    capacitatea: 1700,
    puterea: 240,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 55000
});

allCars[3] = new Car({
    marca: 'Alfa Romeo',
    model: '8C Competizione',
    anul: 2007,
    combustibil: 'Benzin',
    capacitatea: 4700,
    puterea: 450,
    tractiunea: 'Spate',
    cutia: 'Manuala',
    pret: 310000
});

allCars[4] = new Car({
    marca: 'Aston Martin',
    model: 'DB11',
    anul: 2017,
    combustibil: 'Benzin',
    capacitatea: 5200,
    puterea: 600,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 214000
});
allCars[5] = new Car({
    marca: 'Aston Martin',
    model: 'Vulcan',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 7000,
    puterea: 820,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 2300000
});
allCars[6] = new Car({
    marca: 'Aston Martin',
    model: 'Vantage GT12',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 5900,
    puterea: 600,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 385000
});
allCars[7] = new Car({
    marca: 'Aston Martin',
    model: 'DB10',
    anul: 2015,
    combustibil: 'Benzin',
    capacitatea: 4700,
    puterea: 430,
    tractiunea: 'Spate',
    cutia: 'Manuala',
    pret: 3430000
});
allCars[8] = new Car({
    marca: 'Audi',
    model: 'R8 V10 Plus',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 5200,
    puterea: 610,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 255000
});
allCars[9] = new Car({
    marca: 'Audi',
    model: 'S1',
    anul: 2015,
    combustibil: 'Benzin',
    capacitatea: 2000,
    puterea: 231,
    tractiunea: 'Integrala',
    cutia: 'Manuala',
    pret: 23200
});
allCars[10] = new Car({
    marca: 'Audi',
    model: 'RS 6 Avant',
    anul: 2015,
    combustibil: 'Benzin',
    capacitatea: 4000,
    puterea: 560,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 117700
});
allCars[11] = new Car({
    marca: 'Audi',
    model: 'TTS Coupe',
    anul: 2015,
    combustibil: 'Benzin',
    capacitatea: 2000,
    puterea: 265,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 49000
});
allCars[12] = new Car({
    marca: 'Audi',
    model: 'RS 6',
    anul: 2009,
    combustibil: 'Benzin',
    capacitatea: 4200,
    puterea: 580,
    tractiunea: 'fata',
    cutia: 'Automata',
    pret: 32000
});
allCars[13] = new Car({
    marca: 'Audi',
    model: 'RS 4',
    anul: 2006,
    combustibil: 'Benzin',
    capacitatea: 4200,
    puterea: 420,
    tractiunea: 'Integrala',
    cutia: 'Manuala',
    pret: 18000

});
allCars[14] = new Car({
    marca: 'Audi',
    model: 'RS 6',
    anul: 2009,
    combustibil: 'Benzin',
    capacitatea: 5000,
    puterea: 579,
    tractiunea: 'fata',
    cutia: 'Automata',
    pret: 36000
});
allCars[15] = new Car({
    marca: 'Audi',
    model: 'RS 5',
    anul: 2019,
    combustibil: 'Benzin',
    capacitatea: 2900,
    puterea: 450,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 61000
});
allCars[16] = new Car({
    marca: 'Audi',
    model: 'RS Q8',
    anul: 2019,
    combustibil: 'Benzin',
    capacitatea: 4000,
    puterea: 600,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 135000
});
allCars[17] = new Car({
    marca: 'BMW',
    model: 'I8',
    anul: 2019,
    combustibil: 'Hybrid',
    capacitatea: 1500,
    puterea: 374,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 150000
});
allCars[18] = new Car({
    marca: 'BMW',
    model: 'M2 Coupe',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 3000,
    puterea: 365,
    tractiunea: 'Spate',
    cutia: 'Manuala',
    pret: 50000
});
allCars[19] = new Car({
    marca: 'BMW',
    model: 'M4 GTS',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 3000,
    puterea: 493,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 134000
});
allCars[20] = new Car({
    marca: 'BMW',
    model: 'M8',
    anul: 2022,
    combustibil: 'Benzin',
    capacitatea: 4400,
    puterea: 617,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 180000
});
allCars[21] = new Car({
    marca: 'Audi',
    model: 'Q8',
    anul: 2019,
    combustibil: 'Diesel',
    capacitatea: 3000,
    puterea: 249,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 112000
})
allCars[22] = new Car({
    marca: 'BMW',
    model: 'M50D',
    anul: 2022,
    combustibil: 'Diesel',
    capacitatea: 3000,
    puterea: 400,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 130000
})
allCars[23] = new Car({
    marca: 'BMW',
    model: 'X5',
    anul: 2006,
    combustibil: 'Diesel',
    capacitatea: 3000,
    puterea: 225,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 5000
})
allCars[24] = new Car({
    marca: 'Mercedes Benz',
    model: 'X CLASS',
    anul: 2018,
    combustibil: 'Diesel',
    capacitatea: 2300,
    puterea: 190,
    tractiunea: 'Integrala',
    cutia: 'Automata',
    pret: 60000
})
allCars[25] = new Car({
    marca: 'Mercedes Benz',
    model: 'CLS',
    anul: 2018,
    combustibil: 'Diesel',
    capacitatea: 2000,
    puterea: 240,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 84000
})
allCars[26] = new Car({
    marca: 'Chevrolet Corvette',
    model: 'Stingray Coupe',
    anul: 2020,
    combustibil: 'Benzin',
    capacitatea: 6200,
    puterea: 500,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 80000
})
allCars[27] = new Car({
    marca: 'Dodge',
    model: 'Viper ACR',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 8000,
    puterea: 645,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 118000
})
allCars[28] = new Car({
    marca: 'Dodge',
    model: 'Hellcat SRT',
    anul: 2016,
    combustibil: 'Benzin',
    capacitatea: 6200,
    puterea: 717,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 81000
})
allCars[29] = new Car({
    marca: 'Subaru',
    model: 'Impreza WRX',
    anul: 2005,
    combustibil: 'Benzin',
    capacitatea: 2000,
    puterea: 227,
    tractiunea: 'integrala',
    cutia: 'manual',
    pret: 10000

})
allCars[30] = new Car({
    marca: 'BMW',
    model: 'E60',
    anul: 2005,
    combustibil: 'Benzin',
    capacitatea: 5000,
    puterea: 500,
    tractiunea: 'Spate',
    cutia: 'Automata',
    pret: 25000

})
allCars[31] = new Car({
    marca: 'BMW',
    model: 'X5 Le Mans',
    anul: 2000,
    combustibil: 'Benzin',
    capacitatea: 6100,
    puterea: 710,
    tractiunea: 'Integrala',
    cutia: 'Manual',
    pret: 1000000
})
allCars[32] = new Car({
    marca: 'BMW',
    model: 'E38',
    anul: 2001,
    combustibil: 'Benzin',
    capacitatea: 3000,
    puterea: 218,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 6000
})
allCars[33] = new Car({
    marca: 'Toyota',
    model: 'Corolla',
    anul: 2005,
    combustibil: 'Diesel',
    capacitatea: 1400,
    puterea: 96,
    tractiunea: 'Fata',
    cutia: 'Automat',
    pret: 5000
})
allCars[34] = new Car({
    marca: 'Toyota',
    model: 'RAV 4',
    anul: 2016,
    combustibil: 'Diesel',
    capacitatea: 2000,
    puterea: 176,
    tractiunea: 'Fata',
    cutia: 'Manual',
    pret: 20000
})
allCars[35] = new Car({
    marca: 'Volkswagen',
    model: 'Golf 6',
    anul: 2011,
    combustibil: 'Benzin',
    capacitatea: 1400,
    puterea: 172,
    tractiunea: 'Fata',
    cutia: 'Manual',
    pret: 7000
})
allCars[36] = new Car({
    marca: 'Volkswagen',
    model: 'Transporter 4',
    anul: 2000,
    combustibil: 'Diesel',
    capacitatea: 1900,
    puterea: 70,
    tractiunea: 'Fata',
    cutia: 'Manual',
    pret: 4500
})
allCars[37] = new Car({
    marca: 'BMW',
    model: 'E46 GTR',
    anul: 2005,
    combustibil: 'Benzin',
    capacitatea: 4000,
    puterea: 493,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 229000
})
allCars[38] = new Car({
    marca: 'BMW',
    model: 'E31',
    anul: 1999,
    combustibil: 'Benzin',
    capacitatea: 5600,
    puterea: 375,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 35000
})
allCars[39] = new Car({
    marca: 'Toyota',
    model: 'Corolla',
    anul: 2021,
    combustibil: 'Hybrid',
    capacitatea: 2000,
    puterea: 168,
    tractiunea: 'Fata',
    cutia: 'Automat',
    pret: 27000
})
allCars[40] = new Car({
    marca: 'Ferrari',
    model: 'FF',
    anul: 2011,
    combustibil: 'Benzin',
    capacitatea: 6300,
    puterea: 650,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 220000
})
allCars[41] = new Car({
    marca: 'Mercedes',
    model: 'E-CLASS',
    anul: 2015,
    combustibil: 'Benzin',
    capacitatea: 2000,
    puterea: 211,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 38000
})
allCars[42] = new Car({
    marca: 'Mercedes',
    model: 'W124',
    anul: 1996,
    combustibil: 'Benzin',
    capacitatea: 5000,
    puterea: 320,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 40000
})
allCars[43] = new Car({
    marca: 'Mercedes',
    model: 'W124',
    anul: 1996,
    combustibil: 'Benzin',
    capacitatea: 2300,
    puterea: 132,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 7000
})
allCars[44] = new Car({
    marca: 'Mercedes',
    model: 'SLS AMG',
    anul: 2011,
    combustibil: 'Benzin',
    capacitatea: 6200,
    puterea: 571,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 175000
})
allCars[45] = new Car({
    marca: 'Mercedes',
    model: 'S-CLASS S500',
    anul: 1993,
    combustibil: 'Benzin',
    capacitatea: 5000,
    puterea: 320,
    tractiunea: 'Spate',
    cutia: 'Automat',
    pret: 25000
})
allCars[46] = new Car({
    marca: 'Ford',
    model: 'Sierra ',
    anul: 1989,
    combustibil: 'Benzin',
    capacitatea: 2000,
    puterea: 117,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 1000
})
allCars[47] = new Car({
    marca: 'Ford',
    model: 'Puma ',
    anul: 2021,
    combustibil: 'Diesel',
    capacitatea: 1000,
    puterea: 153,
    tractiunea: 'Fata',
    cutia: 'Automat',
    pret: 30000
})
allCars[48] = new Car({
    marca: 'Aston Martin',
    model: 'Cygnet ',
    anul: 2021,
    combustibil: 'Diesel',
    capacitatea: 4700,
    puterea: 430,
    tractiunea: 'Integrala',
    cutia: 'Automat',
    pret: 36000
})
allCars[49] = new Car({
    marca: 'Ford',
    model: 'Transit',
    anul: 1990,
    combustibil: 'Diesel',
    capacitatea: 2500,
    puterea: 70,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 7000
})
allCars[50] = new Car({
    marca: 'Volkswagen',
    model: 'Transporter 1',
    anul: 1959,
    combustibil: 'Benzin',
    capacitatea: 1600,
    puterea: 44,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 50000
})
allCars[51] = new Car({
    marca: 'Volkswagen',
    model: 'Beetle',
    anul: 1950,
    combustibil: 'Benzin',
    capacitatea: 1600,
    puterea: 42,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 15000
})
allCars[52] = new Car({
    marca: 'Toyota',
    model: 'Supra MK3',
    anul: 1990,
    combustibil: 'Benzin',
    capacitatea: 2500,
    puterea: 280,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 10000
})
allCars[53] = new Car({
    marca: 'Toyota',
    model: 'Supra MK4',
    anul: 1996,
    combustibil: 'Benzin',
    capacitatea: 3000,
    puterea: 280,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 40000
})
allCars[54] = new Car({
    marca: 'Mazda',
    model: 'RX 7',
    anul: 1998,
    combustibil: 'Benzin',
    capacitatea: 1300,
    puterea: 115,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 20000
})
allCars[55] = new Car({
    marca: 'Mazda',
    model: 'MX 5',
    anul: 1994,
    combustibil: 'Benzin',
    capacitatea: 1800,
    puterea: 130,
    tractiunea: 'Spate',
    cutia: 'Manual',
    pret: 10000
})
allCars[56] = new Car({
    marca: 'Volkswagen',
    model: 'Polo',
    anul: 2010,
    combustibil: 'Benzin',
    capacitatea: 1400,
    puterea: 180,
    tractiunea: 'Fata',
    cutia: 'Automat',
    pret: 10000
})