import logo_image from '../../assets/images/save_logo.png'
import './Footer.css'
import bussinessDetails from '../../stores/BusinessStore'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import businessStore from '../../stores/BusinessStore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import QrCode2Icon from '@mui/icons-material/QrCode2';


export default function Footer() {



    return (

        <>

            <div className="footerDiv">

                <div className="logo">
                    <img src={logo_image} />
                </div>
                <div className='details'>
                    <p className='pDetails'><CallIcon></CallIcon>{businessStore.businessDetails.phone} </p>
                    <div className='line'></div>
                    <p className='pDetails'><EmailIcon></EmailIcon>{businessStore.businessDetails.email}</p>
                    <div className='line'></div>
                    <p className='pDetails'><LocationOnIcon></LocationOnIcon> {businessStore.businessDetails.address}</p>

                </div>

                <div className='servicesList'>
                    <h2>Featured Posts</h2>
                    <ul>
                        <li>What are prohibited statements and assertion of rights?</li>
                        <li>Mortgage for Amidar apartment</li>
                     
                        <li>What is the relationship between a credit rating and a mortgage?</li>
                     
                        <li>How do we know for what amount we can buy an apartment?</li>
                        <li>Bank of Israel restrictions on accepting a mortgage</li>
                    </ul>
                </div>

                <div className='socialMediaDiv'>
                    <h3>available in:</h3>
                    <YouTubeIcon className='socialmediaIcon'></YouTubeIcon>
                    <TwitterIcon className='socialmediaIcon'></TwitterIcon>
                    <InstagramIcon className='socialmediaIcon'></InstagramIcon>
                    <QrCode2Icon className='socialmediaIcon'></QrCode2Icon>
                </div>

                <div className='newsletter'>
                    <p className='addToNewsleeter'>join our newsletter:</p>
                    <TextField className="outlined-basic" label="name" variant="outlined" />
                    <TextField className="outlined-basic" label="email" variant="outlined" />
                    <Button variant="outlined" className='sendButton' > send<SendIcon></SendIcon> </Button>


                </div>



            </div>




        </>
    )




}