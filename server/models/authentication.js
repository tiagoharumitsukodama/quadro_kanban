const CARDS = []


module.exports.authentication_db = async ( name, password ) => {
    
    if( name == process.env.USER_NAME && password == process.env.USER_PASSWORD ){
        return {lista: 'alguma coisa', user: name}
    }
    else
        return {}
}

module.exports.addCard_db = async ( card ) => {
    CARDS.push(card)
    console.log(CARDS)
    return 'ok'
}

module.exports.updateCard_db = async ( cardId ) => {

    console.log('updated: ',cardId)
    return 'ok'
}