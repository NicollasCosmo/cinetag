import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";


function Home() {
    const [videos, setVideos] = useState([]); // Aqui o useState cria uma variável videos, que é a variável propriamente dita, e um setVideos, responsável por atualizar o estado.

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/NicollasCosmo/cinetag-api/videos') // fizemos o fetch, isto é, a criação da requisição para a nossa API. 
        .then(resposta => resposta.json()) // convertemos os dados de retorno para json, transformando-os em objeto
        .then(dados => { // enviamos os dados da lista para o setVideos, que fez a atualização do nosso estado de videos
            setVideos(dados)
        })
    }, []) // um parâmetro [] para o useEffect, referente a quando queremos que ele faça a atualização da página. um parâmetro para o useEffect, referente a quando queremos que ele faça a atualização da página.



    return(


        <>
    
        <Banner imagem="home" />
        <Titulo>
            <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id} />
            })}
        </section>
      
        </>
        
    )
}

export default Home;