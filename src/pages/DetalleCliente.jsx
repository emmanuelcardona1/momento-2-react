import '../Styles/Detallecliente.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const DetalleCliente = () => {
    const navigate = useNavigate();

   
    const cliente = {
        nombre: "Ana Martínez",
        email: "ana.martinez@example.com",
        telefono: "+34 600 123 456",
        direccion: "Calle Falsa 123, Ciudad Ejemplo",
        imagen: "/cliente1.jpg"
    };

    return (
        <div className="vista-detalle-cliente">
            <div className="detalle-cliente-card">
                <div className="detalle-cliente-imagen-container">
                    {}
                    <img className="detalle-cliente-imagen" src={cliente.imagen} alt={`Foto de ${cliente.nombre}`} />
                </div>
                <div className="detalle-cliente-info">
                    <h2>{cliente.nombre}</h2>
                    <p><strong>Email:</strong> {cliente.email}</p>
                    <p><strong>Teléfono:</strong> {cliente.telefono}</p>
                    <p><strong>Dirección:</strong> {cliente.direccion}</p>
                    <p className="detalle-cliente-descripcion">
                        Cliente VIP desde 2021, con un historial de compras enfocado en productos de electrónica de alta gama.
                        Muestra interés recurrente en ofertas y novedades del sector tecnológico.
                        Última interacción: Consulta sobre garantía extendida para el producto X.
                    </p>
                </div>
            </div>
            <div className="detalle-cliente-acciones">
                <Button
                    customClass="button-accion-detalle"
                    onClick={() => navigate('/listaCliente')}
                >
                    Volver al Listado
                </Button>
            </div>
        </div>
    );
};

export default DetalleCliente;