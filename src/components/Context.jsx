import React, { useState } from "react";
export const UserContext = React.createContext();

function Context({children}) {
    const [state, setState] = useState(null)
  return (
    <div>
      <UserContext.Provider value={{state, setState}}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default Context;
