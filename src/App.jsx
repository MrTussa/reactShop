import { Routes, Route } from 'react-router-dom';
import { Main, Login, ProductShop, ProtectedRoute, UserProfile, PageStructure, ErrorPage, SearchPage, AboutPage } from './pages'
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
          <Route path="/products/:id" element={<AboutPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/profile' element={<UserProfile />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </PageStructure>
  )
};

export default App;