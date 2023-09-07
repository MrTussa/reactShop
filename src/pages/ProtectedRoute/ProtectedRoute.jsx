import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  console.log(useSelector((state) => state.auth));
  const { userToken } = useSelector((state) => state.auth)
  if (!userToken) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }
  return <Outlet />
}