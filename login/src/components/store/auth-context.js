import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false
});
// Takes a default context but you can also include whatever context you want.
// Context could be in string. Though, we commonly include object.

export default AuthContext;