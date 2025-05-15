import Button from "../components/Button";
import '../Styles/detalleProducto.css';
const DetalleProductos = () => {
    return (
        <div className="detalle-productos">

            <div className="contenedor-img-producto-1">

                <img className="img-producto-1" src="" alt="" />


            </div>



            <div className="contenedor-img-producto-2">

                <img className="img-producto-2" src="" alt="" />
            </div>

        <div className="contenedor-boton">


            <Button customClass="button-detalle-producto" type='button'>
                Listado Productos
            </Button>
            </div>
        </div>
    );
}
export default DetalleProductos;