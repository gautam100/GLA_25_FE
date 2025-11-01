var readlineSync = require('readline-sync');

function printTable(){
    var num = readlineSync.question('Enter Number:');

    for(let i=1; i<=10; i++){
        console.log(num,'X',i,'=',num*i)
    }
}

printTable()
