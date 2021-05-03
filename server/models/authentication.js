
module.exports.authentication_db = async ( name, password ) => {
    
    if( name == process.env.USER_NAME && password == process.env.USER_PASSWORD ){
        return {lista: 'alguma coisa', userName: name}
    }
    else
        return {}
}

