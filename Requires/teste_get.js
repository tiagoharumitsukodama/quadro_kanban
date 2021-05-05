const fetch = require('node-fetch')
const AUTH_URL = 'http://localhost:5000/login';
const CARD_URL = 'http://localhost:5000/cards';

const CREDENTIAL = { login: 'letscode', senha: 'lets@123' };

const DEFAULT_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

try{

	(async function addCard(){
	
		console.log('call addCard')
		
		let authHeader = undefined
		
		const authenticate = async () => {
				console.log('call authenticate')

				return await fetch(AUTH_URL, {
				    method: 'POST',
				    mode: 'cors',
				    body: JSON.stringify(CREDENTIAL),
				    headers: DEFAULT_HEADERS,
				})
				    .then( data => { 
						if(data.status == 200) return data.json()
						else throw Error('falha ao conectar')
					})
				    .then(token => `Bearer ${token}`)
					.then(token => ({ Authorization: token }))
					.then(authToken => authHeader=authToken)
				    .catch(console.error);
			};
			

		await authenticate()
		

      fetch(CARD_URL, { headers: authHeader })
            .then(res => {
				if(res.status == 200 ) return res.json()
				else throw Error('lista invalida')
			})
            .then(list => console.log(list))
            .catch(console.error);
	
	})()
	
} catch (error) {
	console.log('ERRO AQUI')
	console.log(error.message)
}
