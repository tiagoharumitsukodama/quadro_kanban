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

export async function deleteCard(card, cookies){
    try {
        const authHeader = cookies.authToken    
    
        const res = await fetch(`${Constants.CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
            method: 'DELETE',
            body: JSON.stringify(card)
        })

        if( res.status === 200 ){
            return await res.json()
        }
        else 
            throw new Error('Não autorizado')
	
    } catch (error) {
        throw new Error('Erro no pedido de remoção')
    }
}

export async function editCard(card,cookies){
    try {
        const authHeader = cookies.authToken    
    
        const res = await fetch(`${Constants.CARD_URL}/${card.id}`, {
            headers: { ...authHeader, ...Constants.DEFAULT_HEADERS },
            method: 'PUT',
            body: JSON.stringify(card)
        })

        if( res.status === 200 ){
            return await res.json()
        }
        else 
            throw new Error('Não autorizado')
	
    } catch (error) {
        throw new Error('Erro no pedido de alteração')
    }
}
