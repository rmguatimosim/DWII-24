var num = [8,2,3,4,5]
const mediaArq = require('./media');

// function media(array){
//     let aux = 0;
//     for(var i = 0; i<array.length; i++){
//         aux = aux + array[i];
//     }
//     return aux/array.length;
// }

// const mediaA = (arr) => {
//     let soma = 0;
//     for(num of arr){
//         soma+=num;
//     }
//     return Math.round(soma/arr.length);
// }

console.log(mediaArq.media(num));
console.log(mediaArq.elevaAoQuadrado(3));
