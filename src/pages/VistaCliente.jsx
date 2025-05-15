import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import '../Styles/vistaCliente.css';

const VistaCliente = () => {
    const navigate = useNavigate(); 

    return (
        <div className="vista-cliente">
            <Card 
                customClass="vista-cliente-card"
                customInput={
                    <>
                        <div className="usuario-imagen">
                            <img src="/usuario.png" alt="Usuario" />
                        </div>
                        <input className="input-card" type="text" placeholder="Correo" />
                    </>
                }
                buttonText="Buscar" 
                onButtonClick={() => navigate("/listaCliente")} 
            >
                <a className="enlace-card" href="/vistaProducto">Buscar productos</a>
            </Card>
        </div>
    );
};

export default VistaCliente;