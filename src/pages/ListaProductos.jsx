import CardsProducto from "../components/CardsProducto";
import Button from "../components/Button";
import '../Styles/listaProductos.css';
import { useNavigate } from "react-router-dom";

const ListaProductos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contenedor-cards-producto">
        <CardsProducto imagen="iphone1.png" />
        <CardsProducto imagen="iphone1.png" />
        <CardsProducto imagen="/iphone1.png" />
        <CardsProducto imagen="iphone1.png" />
        <CardsProducto imagen="iphone1.png" />
        <CardsProducto imagen="iphone1.png" />
      </div>

      <div className="contenedor-boton">
      <Button 
          customClass="button-Lista-producto" 
          type="button" 
          onClick={() => navigate("/vistaProducto")} // Redirección al hacer clic
        >
          Home
        </Button>
      </div>
    </>
  );
};

export default ListaProductos;
