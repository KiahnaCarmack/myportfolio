import medley from './medley.png';
import alumni from './alumniMB.png';
import Wd from './wd.png';
import gifsandgrub from './gifs&grub.png';
import Soon from './ComingSoon.gif';

import "./portfolio.scss"


export default function Portfolio() {
    return <div className="portfolio" id="portfolio">
      
        <div className="container">
            <div className="item">

                <img className="projectphoto" src={medley} alt="" />
                
               
                <img className="projectphoto" src={alumni} alt="" />
                

                <img className="projectphoto" src={Wd} alt="" />
           

                <img className="projectphoto" src={gifsandgrub} alt="" />
               

                <img className="projectphoto" src={Soon} alt="" />

                <img className="projectphoto" src={Soon} alt="" />

<h1>⇣Check out my github to view my project links and code!⇣</h1>

            </div>
        </div>
    </div>;
}

