
import Button from './Button.jsx';
import '../Styles/CardCliente.css';


const CardCliente = ({ imagenCliente, onButtonClick }) => {
    return (
        <div className="card-cliente">
            <div className="imagen-producto"> {}
                <img src={imagenCliente} alt="Cliente" />
            </div>
            {}
            <Button customClass="button-Cliente" onClick={onButtonClick} >
                Ver
            </Button>
        </div>
    );
}
export default CardCliente;

