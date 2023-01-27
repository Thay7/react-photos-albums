import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <main>

                <h3 style={{fontSize: '24px'}}>Olá, seja bem vindo ao meu album de fotos!</h3>
                Clique <Link to='/albums' style={{ textDecoration: '',
                color: '#000',
            }}
                >
                aqui</Link> e sinta-se a vontade
                para acessar os albuns e visualizar
                as fotos.

            </main>
        </div>
    )
}