//app.ts - VERSIONE CORRETTA
let argomenti: number[];

function somma (addendo1 = 0, addendo2 = 0): number {
	return addendo1 + addendo2;
}

if (process.argv.length > 2){
	// qui ci viene segnalato un errore 
	argomenti = process.argv.slice(2).map(value => parseInt(value,10));
	console.log(`il risultato della somma è: ${somma(...argomenti)}`);
}

