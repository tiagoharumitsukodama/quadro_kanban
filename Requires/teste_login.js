const fetch = require('node-fetch')

const AUTH_URL = 'http://localhost:5000/login';
const CARD_URL = 'http://localhost:5000/cards';

const CREDENTIAL = { login: 'letscode', senha: 'lets@123' };

const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};


fetch(AUTH_URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(CREDENTIAL),
        headers: DEFAULT_HEADERS,
})
    .then(data => {

        if(data.status == 200) return data.json()
        else throw Error(`Code: ${data.status}`)
    })
    .then(json => json)
    .then(token => `Bearer ${token}`)
    .then(token => console.log({ Authorization: token }))
    .catch(console.error);

