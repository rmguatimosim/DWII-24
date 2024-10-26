const express = require('express')
const {v4: uuidv4} = require('uuid')
const cors = require("cors")
//const path = require('path')

const app = express()

app.use(express.json())//para receber dados por post
app.use(cors())//para permitir que nosso servidor seja acessivel por outros
app.use(express.urlencoded({extended: true}))

let cursos = [
    {
        id: uuidv4(),
        sigla: 'ADS',
        nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
    },
    {
        id: uuidv4(),
        sigla: 'TPG',
        nome: 'Tecnologia em Processos Gerenciais'
    }
]

// app.get('/', (req,res) => {
//     res.redirect('/curso')
// })

app.get('/cursos', (req, res) => {
    res.status(200).json(cursos)
})

// app.get('/curso/new', (req,res) => {
//     res.sendFile(path.join(__dirname, '/views/new.html'))
// })

app.get('/cursos/:id', (req,res) => {
    const {id} = req.params
    const curso = cursos.find(curso => curso.id == id)
    if (curso)
        res.status(200).json(curso)
    else
        res.status(200).json({})
})

app.post('/cursos', (req,res) => {
    const {sigla, nome} = req.body
    const id = uuidv4()
    cursos.push({id, sigla, nome})
    res.status(201).json({})
})

app.patch('/cursos/:id', (req, res) => {
    const {id} = req.params
    const {sigla, nome} = req.body
    const curso = cursos.find(curso => curso.id == id)
    curso.sigla = sigla
    curso.nome = nome
    res.status(204).json({})
})

app.delete('/cursos/:id', (req,res) => {
    const {id} = req.params
    cursos = cursos.filter(curso => curso.id != id)
    res.status(204).json({})
})

app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!")
})