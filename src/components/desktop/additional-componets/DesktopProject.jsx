import '../additional-componets/styles/DesktopProject.css'
import { GITHUBICON } from '../../../constants/constantsSrcImg';
import DesktopButtonLink from '../buttons/DesktopButtonLink';

function DesktopProject( {img , projectLink , description} ) {
    return(
        <div className="flip-box">
            <div className="flip-box-front">
                <figure className='desktop-project-img'>
                    <img src={img} alt="project-image" />
                </figure>
                <img className='btn-arrow' src="/My-Portfolio/img/btn-arrow.png" alt="arrow button" />
            </div>
            <div className="flip-box-back">
                <div className='desktop-project-details'>
                    {description}
                </div>
                <DesktopButtonLink
                    link={projectLink}
                    buttonLinkText='Github'
                    icon= {GITHUBICON}
                />
            </div>
        </div>
    )
}

export default DesktopProject;
