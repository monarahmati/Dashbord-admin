export const appReducer = (state , action ) => {
    switch ( action.type) {
        case "CHANGE_LANGUAGE" : {
            return {
                ...state,
                language : action.payload,
            }
        }
}

}
