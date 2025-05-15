import Card from "../components/Card";
import '../Styles/vistaProducto.css';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const VistaProducto = () => {
    const navigate = useNavigate(); 
    return (
     
        <div className="vista-cliente">
            <Card customClass="vista-cliente-card"
                customInput={
                    <>
                        <div className="usuario-imagen">
                            <img  src="/producto.png" alt="Usuario" />
                        </div>
                        <input className="input-card" type="text" placeholder="ID Producto" />
                    </>
                }
                buttonText="Buscar"
                onButtonClick={() => navigate("/listaProductos")}
            >
                
                <a className="enlace-card" href="/">Buscar Cliente</a>

            </Card>
        </div>
    );
};

export default VistaProducto;
