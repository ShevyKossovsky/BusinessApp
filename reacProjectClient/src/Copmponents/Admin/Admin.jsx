import { Outlet } from 'react-router-dom'
import { observer } from "mobx-react"
import { AdminPanelSettingsSharp } from '@mui/icons-material'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import LogIn from '../logIn/LogIn'
import Header from '../header/Header'

import BusinessAdmin from '../businessAdmin/BusinessAdmin'
import EditDetails from '../editDetails/EditDetails'
import './Admin.css'
import { useEffect } from 'react'
const Admin = (observer(() => {
  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      GlobalStore.setIsLogin(true)
    }
  }, []);
  return (
    <>
      {
        GlobalStore.isEdit && <EditDetails />
      }

      <Header />
      {!GlobalStore.isLogin ?
        <LogIn /> :
        <BusinessAdmin />
      }
      <Footer/>

     
      


    </>
  )
}))

export default Admin