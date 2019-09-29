//app.ts - VERSIONE CORRETTA esempi di tipo dati
let argomenti: number[];

function somma (addendo1 = 0, addendo2 = 0): number {
	return addendo1 + addendo2;
}

function foo(a: string, b: number): number {return 1}
function bar(a: number, b: number=1): boolean {return true}
function baz(a: boolean, b = true): boolean {return false}

if (process.argv.length > 2){
	// qui ci viene segnalato un errore 
	argomenti = process.argv.slice(2).map(value => parseInt(value,10));
	console.log(`il risultato della somma è: ${somma(...argomenti)}`);
}

const ferrari: string = '250 gto';
const inizioProduzione: number = 1962;
const fineProduzione: number = 1964;

/*
le stringhe template  sono racchiuse dal carattere backtick (`) e possono contenere al loro interno delle espressioni 
attraverso il simbolo $ seguito da parentesi graffe (${}).
*/
let template: string = `La ${ferrari.toUpperCase()} è stata prodotta 
dalla Ferrari fra il ${inizioProduzione} e il ${fineProduzione}`;

const numeroDecimale: number = 73;
const numeroBinario:number = 0b1001001;
const numeroEsadecimale: number = 0x49;
const numeroOttale: number = 0o111;

let foo1: boolean = false;

// Array
const videoGameConsoles: string[] = ['PS4', 'Xbox One S', 'Switch'];

const consoles2018: Array<string> = ['PS4', 'Xbox One S', 'Switch'];

//Tuple  introdotte da TypeScript
//array di dimensione fissa i cui elementi sono di tipo diverso.

let driver: [string, number] = ['Ayrton Senna', 3];

// ENUM

enum PuntoCardinale {Nord, Sud, Ovest, Est};
const nord: PuntoCardinale = PuntoCardinale.Nord; // 0

enum PuntoCardinale1 {Nord = 100, Sud, Ovest, Est};
const nord1: PuntoCardinale1 = PuntoCardinale1.Nord; // 100
const sud1: PuntoCardinale1 = PuntoCardinale1.Sud; // 101
const ovest1: PuntoCardinale1 = PuntoCardinale1.Ovest // 102
const est1: PuntoCardinale1 = PuntoCardinale1.Est // 103

enum PuntoCardinale2 {Nord = 12, Sud = 6, Ovest = 9, Est = 3};
const nord2: PuntoCardinale2 = PuntoCardinale2.Nord; // 12
const sud2: PuntoCardinale2 = PuntoCardinale2.Sud; // 6
const ovest2: PuntoCardinale2 = PuntoCardinale2.Ovest // 9
const est2: PuntoCardinale2 = PuntoCardinale2.Est // 3


console.log("sud2:" + sud2);

console.log("ovest1:" + PuntoCardinale1.Ovest);


// tipo Unione
//variabile prezzo può essere di tipo string oppure di tipo number.

let prezzo : string | number;

prezzo = 10.01;
prezzo = '€2.49';


// crea un nuovo nome per il tipo 'string | number'
type Price = string | number;

let prezzo1: Price;

prezzo1 = 10.01;
prezzo1 = '€2.49';



// tipo never funziona mai portata a termine lancia sempre una eccezione oppure ciclo infinito
function lanciaErrore(messaggio: string): never {
    throw new Error(messaggio);
}

function loopInfinito(): never {
  while (true) {}
}

// type any quando non sappiamo a priori il typo di variabile

const arr: any[] = ['ciao', [1, 2, 3], 17];
let foo2: any = 'foo';
foo2 = 13;
foo2 = {a: 1, b: 2};


// ASSERZIONI di tipo asserzioni di tipo possiamo comunicare al compilatore di avere maggiori informazioni e 
//dettagli su un certo parametro e sovrascrivere il tipo dedotto dal compilatore

// Alternativa 1: asserzione di tipo con parentesi angolari

function baz1(message: any): void {
  // message: any
  const msg = (<string>message); // msg: string 
  msg.toUpperCase();
}



// Alternativa 2: asserzione di tipo con keyword as

function baz2(message: any): void {
  // message: any
  const msg = (message as string); // msg: string 
  msg.toUpperCase();
}


// L'operatore di asserzione di tipo non nullo !

let nome: string | null;

function assegnaNome(nuovoNome: string): void {
  nome = nuovoNome;
}

assegnaNome('Lisa');

/* SENZA USO DELL'OPERATORE DI ASSERZIONE DI TIPO NON NULLO
  Variable 'nome' is used before being assigned.
  Object is possibly 'null'.
*/
//console.log(nome.length); // ERRORE in fase di compilazione


let nome1: string | null;

function assegna1Nome(nuovoNome: string): void {
  nome = nuovoNome;
}

assegna1Nome('Lisa');

// Versione Corretta
// NOTATE il punto esclamativo 'nome!' 
console.log(nome!.length); // 4

