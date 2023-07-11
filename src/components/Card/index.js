import { useFavoritoContext } from 'contextos/favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favorite.png'
import iconeDesfavoritar from './favorite_outline.png'
import { Link } from 'react-router-dom';


function Card({ id, titulo, capa }) {
    const {favorito, adcionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adcionarFavorito({id, titulo, capa})
                }} />

        </div>
    )
}

export default Card;