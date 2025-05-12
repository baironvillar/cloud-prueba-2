import { BrowserRouter, Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'
import ProductList from './components/productList'
import ProductForm from './components/ProductForm'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/new-product' element={<ProductForm />} />
          <Route path='/edit-product/:id' element={<ProductForm />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
