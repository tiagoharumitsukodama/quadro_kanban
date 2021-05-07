export function nextStage( currentStage ){

    if( currentStage === 'ToDo' )
        return 'Doing'
    else if (currentStage === 'Doing')
        return 'Done'
    else
        return null
}

export function backStage( currentStage ){

    if( currentStage === 'ToDo' )
        return null
    else if (currentStage === 'Doing')
        return 'ToDo'
    else
        return 'Doing'
}