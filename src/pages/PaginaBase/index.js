const { default: Cabecalho } = require("components/Cabecalho");
const { default: Container } = require("components/Container");
const { default: FavoritosProvider } = require("contextos/favoritos");
const { Outlet } = require("react-router-dom");


function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
        </main>
    )
}

export default PaginaBase;