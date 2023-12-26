import { Outlet } from 'react-router-dom'
import { observer } from "mobx-react"
import { AdminPanelSettingsSharp } from '@mui/icons-material'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import LogIn from '../logIn/LogIn'
import Header from '../Header/Header'
import BusinessAdmin from '../businessAdmin/BusinessAdmin'
import EditDetails from '../editDetails/EditDetails'
import './Admin.css'
const Admin = (observer(() => {

  return (
    <>
      <Header />
      {!GlobalStore.isLogin ?
        <LogIn /> :
        <BusinessAdmin />
      }
      { 
        GlobalStore.isEdit && <EditDetails/>
      }



      <Footer />
    </>
  )
}))

export default Admin