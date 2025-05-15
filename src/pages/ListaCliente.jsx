import '../Styles/listaClientes.css';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CardsCliente from "../components/CardCliente";
const ListaClientes = () => {
    const navigate = useNavigate();
    const VistaCliente = () => {
        navigate('/vistaCliente');
    };
    return (

        <div className='lista-clientes'>
            <>
                <div className="contenedor-cards-cliente">
                    <CardsCliente imagenCliente ="cliente.png" />
                    <CardsCliente  imagenCliente ="cliente.png" />
                    <CardsCliente  imagenCliente ="cliente.png" />
                    <CardsCliente  imagenCliente ="cliente.png" />
                    <CardsCliente  imagenCliente ="cliente.png" />
                    <CardsCliente  imagenCliente ="cliente.png" />
                </div>
                <div className="contenedor-boton">

                    <Button customClass="button-Lista-cliente" type='button' onClick={VistaCliente}>
                        Home
                    </Button>

                </div>
            </>
        </div>
    )
}
export default ListaClientes;