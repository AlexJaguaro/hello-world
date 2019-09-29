//app.ts - VERSIONE ERRATA
var argomenti;
function somma(addendo1, addendo2) {
    if (addendo1 === void 0) { addendo1 = 0; }
    if (addendo2 === void 0) { addendo2 = 0; }
    return addendo1 + addendo2;
}
if (process.argv.length > 2) {
    // qui ci viene segnalato un errore 
    argomenti = process.argv.slice(2);
    console.log(somma.apply(void 0, argomenti));
}
