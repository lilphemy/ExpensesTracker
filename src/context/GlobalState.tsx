import React, {createContext, Fragment, useReducer} from 'react'
import ActionReducer from "./reduceraction"

interface callData {
    transactions: [
        {id: number, text: string, amount: number},
        {id: number, text: string, amount: number},
        {id: number, text: string, amount: number},
        {id: number, text: string, amount: number},
    ],
    
}

export const initialState: callData = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}


export const GlobalContext = createContext(initialState)

const GlobalProvider = ({children} : {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(ActionReducer, initialState)

    // function for delete dispatch

    function deleteTrans (id: number) {
        dispatch({type: "DELETE_TRANSACTION", payload: id})
    }

    return(
        <GlobalContext.Provider value = {{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider