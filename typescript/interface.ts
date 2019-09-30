// interface.ts

// il punto interrogativo identifica una proprietà opzionale
interface Car {
  modello: string,
  marca: string,
  anno?: number
}

const jaguar: Car = {
  modello: 'E-Type', 
  marca: 'Jaguar',
  anno: 1961
};

// anno è una proprietà 
const alfa: Car = {
  modello: 'Montreal', 
  marca: 'Alfa Romeo',
};


// readonly al nome di una proprietà, indichiamo che quest'ultima può essere settata solo nel momento in cui l'oggetto viene creato. 
// Non è possibile modificare il suo valore successivamente.

interface Car1 {
  modello: string,
  marca: string,
  readonly anno?: number
}

const jaguar1: Car1 = {
  modello: 'E-Type', 
  marca: 'Jaguar',
  anno: 1961
};

// anno è una proprietà opzionale
const alfa1: Car1 = {
  modello: 'Montreal', 
  marca: 'Alfa Romeo',
};

/* 
  Cannot assign to 'anno' because it is a constant or a read-only property.
*/
//jaguar1.anno = 1962; // ERRORE

// La proprietà anno non è obbligatoria e può essere di tipo string o number. 
//Può inoltre avere qualsiasi altra proprietà che non sia una di quelle appena elencate e che può essere di qualsiasi tipo.
interface Motorcycle {
  modello: string;
  marca: string;
  anno?: string | number;
  [prop: string]: any
}

let moto1: Motorcycle = {
  modello: 'V7 Special',
  marca: 'Moto Guzzi',
  anno: 1971
}

let moto2: Motorcycle = {
  modello: '916',
  marca: 'Ducati',
  colore: 'rosso',
  serbatoio: '17l'
}

// Le interfacce per i tipi indicizzabili

interface Car2 {
  modello: string,
  marca: string,
  readonly anno?: number
}

const jaguar2: Car2 = {
  modello: 'E-Type', 
  marca: 'Jaguar',
  anno: 1961
};

// anno è una proprietà 
const alfa2: Car2 = {
  modello: 'Montreal', 
  marca: 'Alfa Romeo',
};

// interfaccia per CarArray
// indici dell'array di tipo 'number'
interface CarArray {
  [index: number]: Car2;
}

let arr: CarArray = [
  jaguar,
  alfa
];

/*
  Type '{ modello: string; }' is not assignable to type 'Car'.
  Property 'marca' is missing in type '{ modello: string; }'.
*/
/*
let arr2: CarArray = [
  jaguar,
  {modello: 'Duna'} // ERRORE
]
*/

/*
È possibile usare una sintassi simile per creare degli oggetti in cui l'indice deve essere però di tipo string. 
È un modo per creare degli oggetti che possono avere un numero indefinito di proprietà che devono tuttavia essere del tipo definito nell'interfaccia.
*/
interface Dizionario {
  [index: string]: string;
}

let d1: Dizionario = {
  italiano: 'ciao',
  inglese: 'hello'
}

let d2: Dizionario = {
  italiano: 'ciao',
  spagnolo: 'hola',
  olandese: 'hallo'
}


//Le interfacce e le funzioni in TypeScript
//È possibile usare le interfacce per definire la segnatura di una funzione come mostrato nell'esempio che segue

interface Operazione {
  (a: number, b: number): number;
}

let somma: Operazione;
let moltiplicazione: Operazione;

somma = function (addendo1: number, addendo2:number): number {
  return addendo1 + addendo2;
};

moltiplicazione = (moltiplicando: number, moltiplicatore: number): number => {
  return moltiplicando * moltiplicatore;
};
//Abbiamo definito due funzioni che implementano l'interfaccia Operazione, 
//si tratta infatti di funzioni che ricevono in ingresso due numeri e restituiscono sempre un valore numerico.

//Ereditarità e interfacce in TypeScript

// Property 'push' does not exist on type 'CarArray'
/*
arr.push({
  modello: 'W113',
  marca: 'Mercedes-Benz'
})
*/

/*Per risolvere il problema estendiamo l'interfaccia Array<Car>. In particolare Array<T> è un tipo parametrizzato 
di cui parleremo nelle prossime lezioni quando introdurremo i cosiddetti Generics o tipi generici.
*/
// CarArray estende ora Array<Car>
interface CarArray2 extends Array<Car> {
  [index: number]: Car;
}

let arr3: CarArray2 = [
  jaguar,
  alfa
];

// possiamo ora eseguire la funzione push() senza problemi
arr3.push({
  modello: 'W113',
  marca: 'Mercedes-Benz'
})