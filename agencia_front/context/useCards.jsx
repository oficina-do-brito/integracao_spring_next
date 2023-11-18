import { useState,createContext } from "react";

/** 
 * Estado com os atributos de pacote viagem do backend
*/

const globalCardState = [];

export const ContextCard = createContext();

export default function ContextCardProvider({children}){
    const [state,setState] = useState(globalCardState);

    return(
        <ContextCard.Provider value={ {state,setState} }>
            {children}
        </ContextCard.Provider>
    );
}