import { createContext, useContext, useState } from "react";




export const FavoritosContext = createContext(); //  createContext() função que cria um contexto
FavoritosContext.displayName = "Favoritos"; // displayName é a nomeclatura (como ele será chamado)

export default function FavoritosProvider({children}) { // FavoritosProvider() fará o fornecemento do contexto quando usada, o que estiver dentro dela, vai usufriir deste contexto.
    const [favorito, setFavorito] = useState([]); // (setFavorito) Fica atualizando os favoritos.

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
                {children}
        </FavoritosContext.Provider>
    )
}



export function useFavoritoContext() {  // Isso é um Hook personalizado
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adcionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);

    }   
    return {
        favorito,
        adcionarFavorito
    }
}