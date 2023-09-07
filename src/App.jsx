import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, ProductShop, ProtectedRoute } from './pages'
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route element={<ProtectedRoute/>}>
        <Route path='/products' element={<ProductShop/>}/>
      </Route>
    </Routes>
  )
};

export default App;