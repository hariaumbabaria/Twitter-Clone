import { createContext, useState } from 'react';


export const AccountContext = createContext(null);

const LoginState = ({children}) => {
    const [account, setAccount] = useState('');

    return (
        <AccountContext.Provider
            value={{account, setAccount}}
        >
            {children}
        </AccountContext.Provider>

    )
}

export default LoginState;