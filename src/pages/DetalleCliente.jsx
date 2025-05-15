import '../Styles/Detallecliente.css';
import Button from '../components/Button';

const DetalleCliente = () => {
    return (
        <div className="contenedor-detalle-cliente">
            <div className="contenedor-img">
                <img className="infImg" src="/cliente1.jpg" alt="Cliente" />
            </div>
            <div className="contenedor-info">
                <p>
                    Información detallada del cliente seleccionado
                    Información detallada del cliente seleccionado
                    Información detallada del cliente seleccionado
                    Información detallada del cliente seleccionado
                    Información detallada del cliente seleccionado
                    Información detallada del cliente seleccionado.
                </p>
            </div>
            <div className="contenedor-boton">
                <Button customClass="button-detalle-cliente" type='button'>
                    Listado clientes
                </Button>
            </div>
        </div>
    );
};

export default DetalleCliente;