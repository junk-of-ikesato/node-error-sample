

const err = new Error('hello world');
console.log('aaaaaaaaa 0');
console.log(err);

console.log('aaaaaaaaa 1');
console.log(err.message);

console.log('aaaaaaaaa 2');
console.log(err.name);

console.log('aaaaaaaaa 3');
console.log(err.stack);

console.log('aaaaaaaaa 5');
console.log(err.code);

//console.log({fileName: err.fileName, lineNumber: err.lineNumber, columnNumber: err.columnNumber});
