import React, {createContext, useReducer} from 'react'
import ActionReducer from "./reduceraction"

interface dataUnit {
    id: number,
    text: string,
    amount: number
}

interface callData {
    transactions: ({id: number, text: string, amount: number})[],
    deleteTrans?: (cap: number) => void,
    addTransaction?: (cap: dataUnit) => void
}

export const initialState: callData = {
    transactions: [
    ],
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({children} : {children: React.ReactNode}) => {

    const [state, dispatch] = useReducer(ActionReducer, initialState)

    // function for delete dispatch

    function deleteTrans (id: number) {
        dispatch({type: "DELETE_TRANSACTION", payload: id})
    }

    function addTransaction (loadData: dataUnit) {
        dispatch({type: 'ADD_TRANSACTION', payload: loadData})
    }

    return(
        <GlobalContext.Provider value = {{transactions: state.transactions, deleteTrans, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider