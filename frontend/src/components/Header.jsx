import { Link } from 'react-router'

export default function Header() {
    return (
        <nav className="text-white py-4 mb-2">
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/' className='text-3xl font-bold text-blue-950'>Mercado Cost</Link>
                <div>
                    <Link to='/new-product' className='bg-green-600 text-white px-4 py-2 rounded-lg'>Agrega un producto</Link>
                </div>
            </div>
        </nav>
    )
}