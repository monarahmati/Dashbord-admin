import { createContext, useContext, useReducer } from "react";
import { appReducer } from "./app-reducer";

const AppContext = createContext()

const initialState = {
language : localStorage.getItem('language' || 'fa')
}

const AppProvaider = ({children}) =>{
    const [state , dispatch ] = useReducer( appReducer , initialState)

    const changeLanguage = (language) =>{
        dispatch({type : "CHANGE_LANGUAGE" , payload : language})
    }

    return (

      <AppContext.Provider value={{...state , changeLanguage}}>
        {children}
      </AppContext.Provider>
    )
}


const useAppContext = () => {

    return useContext(AppContext)
}

export {useAppContext , AppProvaider}