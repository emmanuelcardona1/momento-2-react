
import CardsProducto from "../components/CardsProducto";
import Button from "../components/Button";
import '../Styles/listaProductos.css';
import { useNavigate } from "react-router-dom";

const ListaProductos = () => {
  const navigate = useNavigate();

  const irADetalleProducto = () => {
    navigate('/detalleProducto'); 
  };

  return (
    <>
      <div className="contenedor-cards-producto">
        {}
        <CardsProducto imagen="iphone1.png" onButtonClick={irADetalleProducto} />
        <CardsProducto imagen="iphone1.png" onButtonClick={irADetalleProducto} />
        <CardsProducto imagen="/iphone1.png" onButtonClick={irADetalleProducto} /> {}
        <CardsProducto imagen="iphone1.png" onButtonClick={irADetalleProducto} />
        <CardsProducto imagen="iphone1.png" onButtonClick={irADetalleProducto} />
        <CardsProducto imagen="iphone1.png" onButtonClick={irADetalleProducto} />
      </div>

      <div className="contenedor-boton"> {}
      <Button
          customClass="button-Lista-producto"
          type="button"
          onClick={() => navigate("/vistaProducto")}
        >
          Home
        </Button>
      </div>
    </>
  );
};

export default ListaProductos;
