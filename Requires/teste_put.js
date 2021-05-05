const fetch = require('node-fetch')
const AUTH_URL = 'http://localhost:5000/login';
const CARD_URL = 'http://localhost:5000/cards';

const CREDENTIAL = { login: 'letscode', senha: 'lets@123' };

const DEFAULT_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const card = {id: 'PPP96b633d6-779e-4aee-b925-531b19ea7df8', titulo: "POUCAS tarefas", conteudo: "terminar esse", lista: "ToDo"}

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
					else throw Error('Falha ao conectar')
				})
				.then(token => `Bearer ${token}`)
				.then(token => ({ Authorization: token }))
				.then(authToken => authHeader=authToken)
				.catch(console.error);
			};
			


		await authenticate()
		

		fetch(`${CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...DEFAULT_HEADERS },
            method: 'PUT',
            body: JSON.stringify(card)
        })
            .then(res => {
				if(res.status == 200) return res.json()
				else throw Error(res.status)
			})
			.then( card => console.log(card))
            .catch(console.error);
	
	
	
	
	
	})()
	
} catch (error) {
	console.log('ERRO AQUI')
	console.log(error.message)
}
