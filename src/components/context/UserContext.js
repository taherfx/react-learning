import React from "react";

const UserContext = React.createContext('Fx data lab')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}