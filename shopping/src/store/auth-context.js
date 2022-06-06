import React, { useState } from 'react';

const AuthContext = React.createContext({
    onAddItem       : () => {},
    onRemoveItem    : () => {},
    list            : []
    });

export function AuthContextProvider(props) {

    const [enteredItem, setEnteredItem] = useState([]);

    const addItemHandler = (item) => {
        setEnteredItem(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems.push({
                title       : item.title, 
                description : item.description, 
                price       : item.price,
                id          : Math.random().toString()
            });
            return updatedItems;
        })
    }
  
    const removeItemHandler = (itemId) => {
        setEnteredItem(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== itemId)
            return updatedItems;
        });
    };


    return (
        <AuthContext.Provider 
            value={{
                onAddItem       : addItemHandler,
                onRemoveItem    : removeItemHandler,
                list            : enteredItem
            }}
        >
            {props.children}
        </AuthContext.Provider>
        );
}

export default AuthContext;
