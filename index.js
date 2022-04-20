//var Pizzas = [1,"argentina", 500];
//console.log(Pizzas)

var Pizzas = [

    {
        id: 1,
        nombre: "pizza de Argentina",
        ingredientes: "masa de vino, queso, jamón crudo y aceitunas",
        precio: 500

    },
    {
        id: 2,
        nombre: "pizza de España",
        ingredientes: "mozzarella, cuatro quesos y verduras",
        precio: 300
    },
    {
        id: 3,
        nombre: "pizza de Mexico",
        ingredientes: "jalapeño, queso y aceitunas",
        precio: 600
    },
    {
        id: 4,
        nombre: "pizza de Chile",
        ingredientes: "Provolone y pescado fresco",
        precio: 800
    },
    {
        id: 5,
        nombre: "pizza de Paris",
        ingredientes: "mozarella, jamon",
        precio: 400
    },
    {
        id: 6,
        nombre:"pizza de Bolivia",
        ingredientes: "picante y jalea",
        precio: 900
    }

];



//console.log("los ingre. pares son:${pares}", "los ingredientes impares son; ${impares}");

//a)Las pizzas que tengan un id impar

//habia puesto parametros pero no quedaban friendly :c, era mas sensillo de lo que estaba realizando jeje  

const idPar = Pizzas.filter(Pizzas => Pizzas.id%2!==0).map(Pizzas => Pizzas.nombre)
console.log(`Las pizzas con identificador impar son ${idPar}.`)


//b) ¿Hay alguna pizza que valga menos de $600?

const precioPizza = Pizzas.filter(Pizzas => Pizzas.precio < 600).map(Pizzas => Pizzas.nombre)

function precioChecker() {
    if (precioPizza == false) {
        console.log("No tenemos disponible");
    } else {
        console.log(`las pizzas menores de $600 son las ${precioPizza}.`);
    }
}
precioChecker()


//c) Los nombres de todos las pizzas

const nombrePizzas = Pizzas.map(Pizzas => Pizzas.nombre)

console.log(`Las pizzas que tenemos son ${nombrePizzas}.`)

//d) Los precios de las pizzas
 
const PrecioPizzas = Pizzas.map (Pizzas => Pizzas.precio)
console.log(`El costo de cada pizza es ${PrecioPizzas}.`)


//e) El nombre de cada pizza con su respectivo precio (corrección)

let nombreprecio = Pizzas.map(Pizzas => {
console.log(`La pizza ${Pizzas.nombre} sale $${Pizzas.precio}`)
 })