import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn  : false,
    onLogout    : () => {}, // dummy function to create better IDE auto-completion
    onLogin     : (email, password) => {}

});
// Takes a default context but you can also include whatever context you want.
// Context could be in string. Though, we commonly include object.

export const AuthContextProvider = (props) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    
        if (storedUserLoggedInInformation === "1") {
          setIsLoggedIn(true);
        } 
      
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }; 

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn  : isLoggedIn,
            onLogout    : logoutHandler,
            onLogin     : loginHandler
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;