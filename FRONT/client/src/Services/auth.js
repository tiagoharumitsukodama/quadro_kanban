import Constants from '../Constatns/toFetch'


export const verifyClient = async (username, password) => {

    try {
        const token = await fetch(Constants.AUTH_URL, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(Constants.CREDENTIAL),
            headers: Constants.DEFAULT_HEADERS,
        })

        const authToken = await token.json()
        
        return 'Bearer '+authToken

    } catch (error) {

        throw new Error(`Não foi possível conectar ${username}`)
    }
}