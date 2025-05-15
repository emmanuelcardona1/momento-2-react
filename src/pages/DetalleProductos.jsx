import Button from "../components/Button";
import '../Styles/DetalleProducto.css';
import { useNavigate } from "react-router-dom";

const DetalleProductos = () => {
    const navigate = useNavigate();

    
    const producto = {
        nombre: "iPhone Super X", 
        descripcionCorta: "El último smartphone con características avanzadas.",
        descripcionLarga: "Experimenta la velocidad y potencia de este nuevo dispositivo. Su sistema de cámaras avanzado te permite capturar fotos y videos impresionantes. La pantalla ofrece una experiencia visual fluida y vibrante. Construido con materiales de alta calidad.",
        precio: "999.99€",
        stock: 15,
        imagen: "/iphone1.png" 
    };

    return (
        <div className="vista-detalle-producto">
            <div className="detalle-producto-card">
                <div className="detalle-producto-imagen-container">
                    {}
                    <img className="detalle-producto-imagen" src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                </div>
                <div className="detalle-producto-info">
                    <h2>{producto.nombre}</h2>
                    <p className="producto-precio">{producto.precio}</p>
                    <p className="producto-stock">Disponibles: {producto.stock} unidades</p>
                    <h3 className="producto-subtitulo">Descripción:</h3>
                    <p className="producto-descripcion-corta">{producto.descripcionCorta}</p>
                    <p className="producto-descripcion-larga">{producto.descripcionLarga}</p>
                </div>
            </div>
            <div className="detalle-producto-acciones">
                <Button
                    customClass="button-accion-detalle"
                    onClick={() => navigate('/listaProductos')}
                >
                    Volver al Catálogo
                </Button>
            </div>
        </div>
    );
}
export default DetalleProductos;