import React from 'react';

const UserContext = React.createContext({
    info:{},
    updateInfo:()=>{}
}); 

export default UserContext;