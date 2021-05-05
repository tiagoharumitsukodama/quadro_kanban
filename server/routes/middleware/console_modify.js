const timeFormat = (oldFormatString) => {
    const oldFormatDate = new Date(oldFormatString)

    let newFormatString = ""

    const twoDigits = (dateParameter) => {
        return dateParameter.toString().length<2 ?
                            '0'+dateParameter :
                            dateParameter
    }

    newFormatString += twoDigits(oldFormatDate.getDate()) + '/'
    newFormatString += twoDigits(oldFormatDate.getMonth()) + '/'
    newFormatString += oldFormatDate.getFullYear() + ' '
    newFormatString += twoDigits(oldFormatDate.getHours()) + ':'
    newFormatString += twoDigits(oldFormatDate.getMinutes()) + ':'
    newFormatString += twoDigits(oldFormatDate.getSeconds())

    return newFormatString
}

module.exports.printCreateTime = (card,req ,res, next) => {

    const timeToPrint = timeFormat(card.updatedAt)

    console.log(`${timeToPrint} - Card ${card.id} - ${card.titulo} - Criar`)

    res.end()
}

module.exports.printDeleteTime = (card,req ,res, next) => {

    const timeToPrint = timeFormat(card.updatedAt)

    console.log(`${timeToPrint} - Card ${card.id} - ${card.titulo} - Remover`)

    res.end()
}

module.exports.printUpdateTime = (card,req ,res, next) => {

    const timeToPrint = timeFormat(card.updatedAt)

    console.log(`${timeToPrint} - Card ${card.id} - ${card.titulo} - Alterar`)

    res.end()
}