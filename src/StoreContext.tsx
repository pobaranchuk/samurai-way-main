import React from "react";
import {StoreType} from "./redux/redux-store";

const StoreContext = React.createContext(null)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: React.FC <ProviderType> = ({store, children})=> {
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}

export default StoreContext