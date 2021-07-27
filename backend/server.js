const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

const app = express()
const http = require('http').createServer(app)

const factService = require('./services/fact.service.js')

const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// Express App Config
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// GET List
app.get('/api/fact', async (req, res) => {
    let facts = req.cookies.facts || [];
    res.send(facts)
})

//DELETE SINGLE fact
app.delete('/api/fact/:factId', async (req, res) => {
    const { factId } = req.params
    await factService.remove(factId)
    let facts = req.cookies.facts || []
    const copyFacts = facts.filter(currFact => currFact.id !== factId)
    res.cookie('facts', copyFacts)
    res.send('Removed Success')
})


//ADD SINGLE fact
app.post('/api/fact', async (req, res) => {
    const fact = req.body;
    let facts = req.cookies.facts || [];
    const savedFact = await factService.save(fact)
    const copyFacts = [...facts, savedFact]
    res.cookie('facts', copyFacts)
    res.send(savedFact)
})



const port = process.env.PORT || 3030
http.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

console.log('I am Here!, am I?')

