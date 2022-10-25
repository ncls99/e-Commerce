import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/purchases' element={<Purchases/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
