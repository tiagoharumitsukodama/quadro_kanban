const fetch = require('node-fetch')
const AUTH_URL = 'http://localhost:5000/login';
const CARD_URL = 'http://localhost:5000/cards';

const CREDENTIAL = { login: 'letscode', senha: 'lets@123' };

const DEFAULT_HEADERS = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const card = {titulo: "muitas tarefas", conteudo: "terminar esse", lista: "ToDo"}


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
		

		fetch(`${CARD_URL}`, {
			headers: { ...authHeader, ...DEFAULT_HEADERS },
			method: 'POST',
			body: JSON.stringify(card)
		})
			.then(res => { console.log(res.status)
				if( res.status == 201 ) return res.json()
				if( res.status == 200 ) return {message: 'opa ops'}
				else throw Error('falha ao add')
			})
			.then( card => console.log(card) )
			.catch(console.error);
	
	
	})()
	
} catch (error) {
	console.log('ERRO AQUI')
	console.log(error.message)
}
