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
    .then(data => data.json())
    .then(json => console.log(json))
    /*.then(token => `Bearer ${token}`)
    .then(token => ({ Authorization: token }))
    .catch(console.error);
*/

