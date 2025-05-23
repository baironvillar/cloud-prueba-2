import { useEffect, useState } from "react"
import { deleteProduct, getProducts } from "../api/products"
import { useNavigate } from "react-router"

export default function ProductList() {

    const [products, setProducts] = useState([])

    const navitage = useNavigate()

    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }

    const handleDelete = async (id) => {
        await deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="mt-8">
            <h1 className="text-3xl font-bold text-sky-900">Productos Disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
                {products.map(product => (
                    <div key={product.id} className="bg-sky-900 p-4 rounded-lg shadow">
                        <p>{product.nombre}</p>
                        <p><span className="font-bold">Precio: </span>{product.precio}</p>
                        <p><span className="font-bold">Descripción: </span>{product.descripcion}</p>
                        <div className="mt-4">
                            <button 
                                className="bg-green-600 text-white px-2 py-1 rounded-lg"
                                onClick={() => navitage('/edit-product/' + product.id)}
                            >
                                Editar
                            </button>
                            <button 
                                className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2"
                                onClick={() => handleDelete(product.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}