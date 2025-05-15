import VistaCliente from "../pages/VistaCliente"
import VistaProducto from "../pages/VistaProducto"
import ListaProductos from "../pages/ListaProductos"
import ListaCliente from "../pages/ListaCliente"
import DetalleCliente from "../pages/DetalleCliente"
import DetalleProductos from "../pages/DetalleProductos"
export let enrutador = [
    {
        path: "/listaProductos",
        element: <ListaProductos />,
    },
    {
        path: "/vistaCliente",
        element: <VistaCliente />,
    },
    {
        path: "/vistaProducto",
        element: <VistaProducto />,
    },
    {
        path: "/listaCliente",
        element: <ListaCliente />,
    },
    {
        path: "/detalleCLIENTES",
        element: <DetalleCliente />,
    },
    {
    path: "/",
    element: <DetalleProductos />,
    }
]