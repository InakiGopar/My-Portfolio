import './styles/MobileContactMe.css';
import { EMAILURL, LINKEDINURL } from '../../constants/constantsUrl';
import { CONTACTMESECTIONIMG, EMAILICON, LINKENDINICON } from '../../constants/constantsSrcImg';
import MobileButtonLink from './buttons/MobileButtonLink';
import MobileContainer from './additional-components/MobileContainer';

function MobileContactMe() {

    return(
        <section id='contacto' className='contact-me'>
            <h2>Contactame</h2>
            <figure>
                <img src= {CONTACTMESECTIONIMG} alt="contact me image" />
            </figure>
            <MobileContainer>
                <p>tatigop09@gmail.com</p>
                <div className='button-container'>
                    <MobileButtonLink
                        link= {EMAILURL}
                        buttonLinkText='Email'
                        icon= {EMAILICON}
                    />
                    <MobileButtonLink
                        link = {LINKEDINURL}
                        buttonLinkText='Linkedin'
                        icon= {LINKENDINICON}
                    />
                </div>
            </MobileContainer>
        </section>
    )
}

export default MobileContactMe;