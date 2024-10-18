const express = require("express");
const app = express();



app.get('/', (req, res)=>{
    res.send("Oi! Oi! Oi!");
})

app.get('/tchau', (req, res)=>{
    res.send("Tchau prime 2 o inimigo agora é <strong> outro! <strong>");
})

app.get('/ADS', (req, res)=>{
    res.send("Você acessou a rota <strong> ADS <strong>");
})

app.get('/r/:subrota', (req, res)=>{
    const sr = req.params.subrota;
    res.send("Você digitou: " + sr);
})

app.get('/rota/:v1/:v2', (req, res)=>{
    const {v1,v2} = req.params;
    res.send(`Você digitou <b>${v1}</b> e <b>${v2}</b>`);
})

app.get('/receberFormulario', (req, res) => {
    const {nome, sobrenome, password} = req.query
    res.send(`<h1>Nome: ${nome} <br>Sobrenome: ${sobrenome} <br>Password: ${password} </h1>`);
})
app.use(express.urlencoded({extended:true})) //necessario para receber dados pelo metodo post
app.post('/receberFormulario', (req, res) => {
    const {nome, sobrenome, password} = req.body
    res.send(`<h2>Nome: ${nome} <br>Sobrenome: ${sobrenome} <br>Password: ${password} </h2>`);

})

app.get('/:pesquisa', (req, res)=>{
    const {q, s} = req.query;
    res.send(`<h1>Você pesquisou por: ${q} e ${s}<\h1>`);
    
})



app.get('*', (req, res)=>{
    res.send("Bem amigos da rede globo!");
})




app.listen(3000, () =>{
    console.log("Servidor ligado na porta 3000.");
})