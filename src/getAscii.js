const fs = require('fs');

let arr = []
for (let i = 9600; i < 9727; i++){ arr.push(String.fromCharCode(i))}

fs.writeFile('./validChars.ts', `const VALID_CHARS = ${JSON.stringify(arr)}`, ()=>{console.log('all done')})