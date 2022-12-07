const citiesRussia = ['Москва', 'Санкт-Петербург','Казань','Новосибирск']
const citiesEurope = ['Берлин','Прага','Париж']

// console.log(...citiesRussia)


const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetespurg: 8,
    Kazan: 5,
    Novosibirsk: 6
}
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praga: 3,
    Paris: 2
}

console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})