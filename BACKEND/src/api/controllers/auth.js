
const userDatabase = require('../repositories/check_user') 
const jwt_tools = require('../services/auth_token') 

module.exports.verifyUser = ('/', async (req, res) => {

    const { login, senha } = req.body

    userDatabase.checkUser(login, senha)
        .then( username => {

            if ( !username ){
                res.status(401)
                res.end()
            }
            else {
                const token = jwt_tools.generateAccessToken( username )
                res.status(200)
                res.json(token)
                res.end()
            }
        })
        .catch( erro => {
            res.status(400)
            res.end()
        })
})
