import { useEffect, useState } from "react"
import { createProduct, getProduct, updateProduct } from "../api/products"
import { useNavigate, useParams } from "react-router"
import toast from "react-hot-toast"

export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })
    
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const loadProducts = async () => {
            if (params.id) {
                const response = await getProduct(params.id)
                setProduct(response.data)
            }
        }
        loadProducts()
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product)
        if (params.id) {
            await updateProduct(params.id, product)
            toast.success('Producto modificado')
        } else {
            await createProduct(product)
            toast.success('Producto creado')
        }
        navigate('/')
    }

    console.log(params.id)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Nombre</label>
                    <input 
                        value={product.nombre}
                        type="text" 
                        onChange={(e) => setProduct({...product, nombre: e.target.value})}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"/>

                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Precio</label>
                    <input 
                        value={product.precio}
                        type="number" 
                        onChange={(e) => setProduct({...product, precio: e.target.value})}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700">Descripción</label>
                    <textarea 
                        value={product.descripcion}
                        type="text" 
                        onChange={(e) => setProduct({...product, descripcion: e.target.value})}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Guardar</button>
                </div>
            </form>
        </div>
    )
}