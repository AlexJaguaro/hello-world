"use strict";
//app.ts - VERSIONE CORRETTA esempi di tipo dati
var argomenti;
function somma(addendo1, addendo2) {
    if (addendo1 === void 0) { addendo1 = 0; }
    if (addendo2 === void 0) { addendo2 = 0; }
    return addendo1 + addendo2;
}
function foo(a, b) { return 1; }
function bar(a, b) {
    if (b === void 0) { b = 1; }
    return true;
}
function baz(a, b) {
    if (b === void 0) { b = true; }
    return false;
}
if (process.argv.length > 2) {
    // qui ci viene segnalato un errore 
    argomenti = process.argv.slice(2).map(function (value) { return parseInt(value, 10); });
    console.log("il risultato della somma \u00E8: " + somma.apply(void 0, argomenti));
}
var ferrari = '250 gto';
var inizioProduzione = 1962;
var fineProduzione = 1964;
/*
le stringhe template  sono racchiuse dal carattere backtick (`) e possono contenere al loro interno delle espressioni
attraverso il simbolo $ seguito da parentesi graffe (${}).
*/
var template = "La " + ferrari.toUpperCase() + " \u00E8 stata prodotta \ndalla Ferrari fra il " + inizioProduzione + " e il " + fineProduzione;
var numeroDecimale = 73;
var numeroBinario = 73;
var numeroEsadecimale = 0x49;
var numeroOttale = 73;
var foo1 = false;
// Array
var videoGameConsoles = ['PS4', 'Xbox One S', 'Switch'];
var consoles2018 = ['PS4', 'Xbox One S', 'Switch'];
//Tuple  introdotte da TypeScript
//array di dimensione fissa i cui elementi sono di tipo diverso.
var driver = ['Ayrton Senna', 3];
// ENUM
var PuntoCardinale;
(function (PuntoCardinale) {
    PuntoCardinale[PuntoCardinale["Nord"] = 0] = "Nord";
    PuntoCardinale[PuntoCardinale["Sud"] = 1] = "Sud";
    PuntoCardinale[PuntoCardinale["Ovest"] = 2] = "Ovest";
    PuntoCardinale[PuntoCardinale["Est"] = 3] = "Est";
})(PuntoCardinale || (PuntoCardinale = {}));
;
var nord = PuntoCardinale.Nord; // 0
var PuntoCardinale1;
(function (PuntoCardinale1) {
    PuntoCardinale1[PuntoCardinale1["Nord"] = 100] = "Nord";
    PuntoCardinale1[PuntoCardinale1["Sud"] = 101] = "Sud";
    PuntoCardinale1[PuntoCardinale1["Ovest"] = 102] = "Ovest";
    PuntoCardinale1[PuntoCardinale1["Est"] = 103] = "Est";
})(PuntoCardinale1 || (PuntoCardinale1 = {}));
;
var nord1 = PuntoCardinale1.Nord; // 100
var sud1 = PuntoCardinale1.Sud; // 101
var ovest1 = PuntoCardinale1.Ovest; // 102
var est1 = PuntoCardinale1.Est; // 103
var PuntoCardinale2;
(function (PuntoCardinale2) {
    PuntoCardinale2[PuntoCardinale2["Nord"] = 12] = "Nord";
    PuntoCardinale2[PuntoCardinale2["Sud"] = 6] = "Sud";
    PuntoCardinale2[PuntoCardinale2["Ovest"] = 9] = "Ovest";
    PuntoCardinale2[PuntoCardinale2["Est"] = 3] = "Est";
})(PuntoCardinale2 || (PuntoCardinale2 = {}));
;
var nord2 = PuntoCardinale2.Nord; // 12
var sud2 = PuntoCardinale2.Sud; // 6
var ovest2 = PuntoCardinale2.Ovest; // 9
var est2 = PuntoCardinale2.Est; // 3
console.log("sud2:" + sud2);
console.log("ovest1:" + PuntoCardinale1.Ovest);
// tipo Unione
//variabile prezzo può essere di tipo string oppure di tipo number.
var prezzo;
prezzo = 10.01;
prezzo = '€2.49';
var prezzo1;
prezzo1 = 10.01;
prezzo1 = '€2.49';
// tipo never funziona mai portata a termine lancia sempre una eccezione oppure ciclo infinito
function lanciaErrore(messaggio) {
    throw new Error(messaggio);
}
function loopInfinito() {
    while (true) { }
}
// type any quando non sappiamo a priori il typo di variabile
var arr = ['ciao', [1, 2, 3], 17];
var foo2 = 'foo';
foo2 = 13;
foo2 = { a: 1, b: 2 };
// ASSERZIONI di tipo asserzioni di tipo possiamo comunicare al compilatore di avere maggiori informazioni e 
//dettagli su un certo parametro e sovrascrivere il tipo dedotto dal compilatore
// Alternativa 1: asserzione di tipo con parentesi angolari
function baz1(message) {
    // message: any
    var msg = message; // msg: string 
    msg.toUpperCase();
}
// Alternativa 2: asserzione di tipo con keyword as
function baz2(message) {
    // message: any
    var msg = message; // msg: string 
    msg.toUpperCase();
}
// L'operatore di asserzione di tipo non nullo !
var nome;
function assegnaNome(nuovoNome) {
    nome = nuovoNome;
}
assegnaNome('Lisa');
/* SENZA USO DELL'OPERATORE DI ASSERZIONE DI TIPO NON NULLO
  Variable 'nome' is used before being assigned.
  Object is possibly 'null'.
*/
//console.log(nome.length); // ERRORE in fase di compilazione
var nome1;
function assegna1Nome(nuovoNome) {
    nome = nuovoNome;
}
assegna1Nome('Lisa');
// Versione Corretta
// NOTATE il punto esclamativo 'nome!' 
console.log(nome.length); // 4
