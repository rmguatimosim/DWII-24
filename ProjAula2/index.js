const express = require("express");
const app = express();


app.get('/', (req, res)=>{
    res.send("Bem vindo ao meu exercício!");
})

app.get('/nome/:entry', (req, res) => {
    const entry = req.params.entry;
    res.send(`Bem vindo(a) ${entry}`);
})

app.get('/repetir/:word/:num', (req, res) => {
    const {word, num} = req.params;
    let print = word;
    x = parseInt(num);
    if(word == "" || x <= 0){
        res.send("Entradas inválidas.");
    }
    for(let i = 2; i<=x; i++){
        print = (print + " " + word);
    }
    res.send(print);
})

app.get('/som/:entry', (req, res) => {
    const{entry} = req.params;
    switch(entry){
        case 'cao':
            res.send(`O ${entry} faz Auuuu Auuuu Auuuu!`);
            break;
        case 'gato':    
            res.send(`O ${entry} faz Miauuuu!`);
            break;  
        case 'vaca':    
            res.send(`A ${entry} faz Muuuu!`);
            break;     
        case 'ovelha':    
            res.send(`A ${entry} faz Beeeeé!`);
            break;  
        case 'cavalo':    
            res.send(`O ${entry} faz Neeeeigh!`);
            break;     
        default:
            res.send(`Animal desconhecido.`);     

    }
})

app.get('/rep', (req, res) => {
    //const {p, q} = req.query;
    const {p, q} = req.query
    let print = p;
    x = parseInt(q);
    if(p == "" || x <= 0){
        res.send("Entradas inválidas.");
    }
    for(let i = 2; i<=x; i++){
        print = (print + " " + p);
    }
    res.send(print);
})











app.get('*', (req, res) => {
    res.send("Página não encontrada.");
})

app.listen(3000, () =>{
    console.log("Servidor ON.");
})