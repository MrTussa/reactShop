import { Routes, Route } from 'react-router-dom';
import { Main, Login, ProductShop, ProtectedRoute, UserProfile, PageStructure, ErrorPage } from './pages'
import { Logout } from './components';
import "./App.css"
function App() {
  return (
    <PageStructure>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/products' element={<ProductShop />} />
          <Route path='/profile' element={<UserProfile />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </PageStructure>
  )
};

export default App;