'use strict';

const person = {
    name: 'Vlad',
    tel: '37529712409',
    parents: {
        mom: 'Tanya',
        dad: 'Kolya'
    }
}
const clone = JSON.parse(JSON.stringify(person));
console.log(clone);