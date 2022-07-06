import './Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return(
        <footer>
            <p>© Droid9 South America</p>
            <section>
                <div>
                    <a href="https://charlymorganstudios.website/" target="_blank">Mastering Service</a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/droid9southamerica" target="_blank">
                                <FacebookIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/droid9southamerica_/?hl=es" 
                            target="_blank">
                                <InstagramIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCGG2nRv47SRcm-qEGZ9ObNg" target="_blank">
                                <YouTubeIcon/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;