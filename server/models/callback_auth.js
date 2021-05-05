const db = require('./config')


module.exports.authenticate_user = async ( name, password ) => {
    
    if( name == process.env.USER_NAME && password == process.env.USER_PASSWORD ){
        return name
    }
    else
        return null
}
