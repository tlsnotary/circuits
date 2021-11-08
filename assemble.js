const casm = require('./casmbundle');
global.fs = require('fs'); 

for (let i=1; i<7; i++){
    global.fs.writeFileSync('c'+i+'.out', casm.parseAndAssemble('c'+i+'.casm'));
}
