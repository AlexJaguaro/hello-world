"use strict";
//app.ts - VERSIONE CORRETTA
var argomenti;
function somma(addendo1, addendo2) {
    if (addendo1 === void 0) { addendo1 = 0; }
    if (addendo2 === void 0) { addendo2 = 0; }
    return addendo1 + addendo2;
}
if (process.argv.length > 2) {
    // qui ci viene segnalato un errore 
    argomenti = process.argv.slice(2).map(function (value) { return parseInt(value, 10); });
    console.log("il risultato della somma \u00E8: " + somma.apply(void 0, argomenti));
}
