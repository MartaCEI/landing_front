
import './css/App.css'
import './css/Correos.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {


  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout;
