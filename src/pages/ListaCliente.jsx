
import '../Styles/listaClientes.css';
import { useNavigate } from "react-router-dom"; 
import Button from "../components/Button";
import CardsCliente from "../components/CardCliente"; CardsCliente

const ListaClientes = () => {
    const navigate = useNavigate(); 

    const irADetalleCliente = () => {
        navigate('/detalleCLIENTES'); 
    };

    const irAVistaCliente = () => { 
        navigate('/vistaCliente');
    };

    return (
        <div className='lista-clientes'>
            <>
                <div className="contenedor-cards-cliente">
                    {}
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                    <CardsCliente imagenCliente="cliente.png" onButtonClick={irADetalleCliente} />
                </div>
                <div className="contenedor-boton"> {}
                    <Button customClass="button-Lista-cliente" type='button' onClick={irAVistaCliente}>
                        Home
                    </Button>
                </div>
            </>
        </div>
    )
}
export default ListaClientes;