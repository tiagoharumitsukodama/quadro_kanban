
module.exports.authentication_db = async ( name, password ) => {
    
    if( name == 'letscode' && password == 'lets@123' ){
        return {lista: 'alguma coisa', userName: name}
    }
    else
        return {}
}

