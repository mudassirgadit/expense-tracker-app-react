import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//InitialState 
const initialState = {
    transactions: [
        {id: 1, text: 'Income', amount: +5000 },
        {id: 2, text: 'Utiliy', amount: -500 },
        {id: 3, text: 'Entertainment ', amount: -2000},
        {id: 4, text: 'Food', amount: -1500},
    ]
}
//CreateContext
export const GlobalContext = createContext(initialState);



// provider Component
export const GlobalProvider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });

}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}
return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}
