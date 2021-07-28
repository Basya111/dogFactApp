const fs = require('fs')
const gFacts = require('../data/factDB.json')


module.exports = {
    query,
    getById,
    save,
    remove
}


// for ruture use 
function query() {
    var facts = gFacts
    return Promise.resolve(facts)
}

// for ruture use 
function getById(factId) {
    const fact = gFacts.find(fact => fact.id === +factId)
    if (fact) return Promise.resolve(fact)
    else return Promise.reject('No Fact')
}

function remove(factId) {
    const idx = gFacts.findIndex(fact => fact.id === factId)
    if (idx >= 0) {
        gFacts.splice(idx, 1)
        _savefactsToFile()
        return Promise.resolve()
    }
    else return Promise.reject('No Employe')
}

function save(fact) {
    gFacts.push(fact)
    _savefactsToFile()
    return Promise.resolve(fact)
}

function _savefactsToFile() {
    fs.writeFileSync('data/factDB.json', JSON.stringify(gFacts, null, 2))
}
