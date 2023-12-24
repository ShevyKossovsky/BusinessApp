import { Outlet } from 'react-router-dom'
import { observer } from "mobx-react"
import { AdminPanelSettingsSharp } from '@mui/icons-material'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import LogIn from '../logIn/LogIn'
import Header from '../Header/Header'
import BusinessAdmin from '../businessAdmin/BusinessAdmin'

const Admin = (observer(() => {

  return (
    <>
      <Header/>
      {!GlobalStore.isLogin ?
        <LogIn /> :
       <BusinessAdmin/>
      }


      <Footer/>
    </>
  )
}))

export default Admin