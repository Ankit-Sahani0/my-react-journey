import React from "react";
import UserContext from "./userContext";


//A Provider is a component that wraps part of your app and provides the context value to all its children.
const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;