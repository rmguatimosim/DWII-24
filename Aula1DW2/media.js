const media = (arr) => {
    let soma = 0;
    for(num of arr){
        soma+=num;
    }
    return Math.round(soma/arr.length);
}

const elevaAoQuadrado = (num) => num*num;

module.exports.media = media;
module.exports.elevaAoQuadrado = elevaAoQuadrado;