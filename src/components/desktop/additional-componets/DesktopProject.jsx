import '../additional-componets/styles/DesktopProject.css'
import { GITHUBICON } from '../../../constants/constantsSrcImg';
import DesktopButtonLink from '../buttons/DesktopButtonLink';

function DesktopProject( {img , projectLink , description} ) {
    return(
        <div>
            <figure className='desktop-project-img'>
                <img src={img} alt="project-image" />
            </figure>
            <div className='desktop-project-details'>
                {description}
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