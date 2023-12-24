import Button from '@mui/material/Button';
import React from 'react';
import './header.css';
import logo_image from '../../assets/images/save_logo.png';
import CallIcon from '@mui/icons-material/Call';
import businessStore from '../../stores/BusinessStore';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import LogoutIcon from '@mui/icons-material/Logout';
import { observer } from "mobx-react";
import GlobalStore from '../../stores/GlobalStore'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import EditDetails from '../editDetails/EditDetails'
import { IconButton } from '@mui/material';
const Header = (observer(() => {
    return (

        <>
            <header>
                <div className='infoDiv'>
                    <div className="logo">
                        <img src={logo_image} />
                    </div>

                    <div className="business-details">
                        <h1>{businessStore.businessDetails.name}</h1>
                        <p>{businessStore.businessDetails.address} | {businessStore.businessDetails.email}</p>

                    </div>

                </div>
                {GlobalStore.isLogin &&
                    <IconButton aria-label="delete" color="primary" className='editButton' onClick={() => { GlobalStore.setIsEdit(true) }}>
                        <ModeEditOutlineRoundedIcon ></ModeEditOutlineRoundedIcon>
                    </IconButton>}


                <div className='buttonsDiv'>
                    <Button variant="outlined"> {businessStore.businessDetails.phone} <CallIcon></CallIcon></Button>
                    {
                        !GlobalStore.isLogin ?
                            <Button variant="outlined" href='/admin'> login <LoginIcon /> </Button>
                            :
                            <Button variant="outlined" href='/' > logout <LogoutIcon /> </Button>
                    }



                </div>

                {
                    GlobalStore.isEdit && <EditDetails />
                }


            </header>



        </>

    );


}))
export default Header
