
import Button from './Button.jsx';
import '../Styles/cardsProductos.css';

const CardsProducto = ({ imagen, onButtonClick }) => {
    return (
        <div className="card-producto">
            <div className="imagen-producto">
                <img src={imagen} alt="Producto" />
            </div>
            {}
            <Button customClass="button-producto" onClick={onButtonClick}>
                Ver
            </Button>
        </div>
    );
}

export default CardsProducto;
