import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register } from './pages'
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  )
};

export default App;