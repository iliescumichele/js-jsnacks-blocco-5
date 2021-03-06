/*
    Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
    Calcola quanto pesano tutte le zucchine.
*/
const zucchine = [
    {
        varieta: "bolognese",
        peso: 200,
        lunghezza: 10
    },
    {
        varieta: "scuro",
        peso: 210,
        lunghezza: 14
    },
    {
        varieta: "rugoso",
        peso: 120,
        lunghezza: 19
    },
    {
        varieta: "romanesco",
        peso: 100,
        lunghezza: 23
    },
    {
        varieta: "gialla",
        peso: 80,
        lunghezza: 21
    },
    {
        varieta: "tonda",
        peso: 75,
        lunghezza: 4.3
    },
    {
        varieta: "chiara",
        peso: 55,
        lunghezza: 13.5
    },
    {
        varieta: "lungo",
        peso: 88,
        lunghezza: 12.8
    },
    {
        varieta: "alberello",
        peso: 101,
        lunghezza: 6 
    },
    {
        varieta: "striato",
        peso: 137,
        lunghezza: 5
    }
];


const totPesoZucchine = weightIn(zucchine);
console.log('Il peso totale delle zucchine è: ' + totPesoZucchine + 'g');

document.querySelector('h1').innerHTML = 'Il peso totale delle zucchine è: ' + totPesoZucchine + 'g';







function weightIn(struct){
    let pesoTot = 0;

    for(let i in struct){
        pesoTot += struct[i].peso;
    }
    return pesoTot;
};