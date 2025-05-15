
import Button from './Button.jsx';
import '../Styles/CardCliente.css';
const CardCliente = ({imagenCliente}) => {
    return (

        <div className="card-cliente">
               <div className="imagen-producto">
                <img src={imagenCliente} alt="Cliente" />
            </div>
            <Button customClass="button-Cliente" >
                Ver
            </Button>
        </div>
    );
}
export default CardCliente;
