import { useParams, Link } from 'react-router-dom';

function Produto(){

    const { id } = useParams();

    return(
        <div>
            <h2>Página de detalhe do produto</h2>
            <span>MEU PRODUTO É {id}</span>
        </div>
    )
}

export default Produto;