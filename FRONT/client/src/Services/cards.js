import Constants from '../Constatns/toFetch'


export async function getAllCards(cookies) {
    
    try {
        	
        const authHeader = cookies.authToken    

        const res = await fetch(Constants.CARD_URL, { headers: authHeader })

        if(res.status !== 200 ) 
            throw new Error('Falha ao pegar a lista de cards')
        
        const list = await res.json()

        return list;
        
    } catch (error) {
        throw new Error('Falhou ao pegar os cards')      
    }
}
