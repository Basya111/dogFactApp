import { httpService } from './httpService'
import Axios from 'axios';
var axios = Axios.create({
    withCredentials: true,
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
})


export const factService = {
    save,
    query,
    queryFav,
    remove,
    getItemById,
    getFacts,
}


async function query(num) {
    const facts = await getFacts(num)
    return facts
}

async function queryFav() {
    return await httpService.get(`fact`)
}

async function remove(factId) {
    return await httpService.delete(`fact/${factId}`)

}
async function save(fact) {
    const factToSave = {id: makeId(), txt: fact}
    return await httpService.post('fact', factToSave)
}

async function getItemById(factId) {
    return await httpService.get(`fact/${factId}`)
}


async function getFacts(num) {
    const url = `/facts?number=${num}`
    // const url = `https://dog-api.kinduff.com/api/facts?number=${num}` // was blocked
    const res = await axios.get(url);
    return res.data.facts;
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}