import React, {createContext, useReducer} from 'react'
import ActionReducer from "./reduceraction"

interface dataUnit {
    id: number,
    text: string,
    amount: number
}

interface callData {
    transactions: ({id: number, text: string, amount: number})[]
    deleteTrans?: (cap: number) => void
    addTransaction?: (cap: dataUnit) => void
}

// interface callData {
//     transactions: [
//         {id: number, text: string, amount: number},
//         {id: number, text: string, amount: number},
//         {id: number, text: string, amount: number},
//         {id: number, text: string, amount: number},
//     ]
// }

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