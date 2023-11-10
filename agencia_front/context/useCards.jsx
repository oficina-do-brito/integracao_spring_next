import { useState,createContext } from "react";

/** 
 * Estado com os atributos de pacote viagem do backend
*/

const globalCardState = [
    {titulo: "Titulo# 1",preco: 0, descricao:"Descrição do Titulo #01"},
    {titulo: "Titulo# 2",preco: 0, descricao:"Descrição do Titulo #02"},
    {titulo: "Titulo# 3",preco: 0, descricao:"Descrição do Titulo #03"},
];

export const ContextCard = createContext();

export default function ContextCardProvider({children}){
    const [state,setState] = useState(globalCardState);

    return(
        <ContextCard.Provider value={ {state,setState} }>
            {children}
        </ContextCard.Provider>
    );
}