
import "./footer.scss"
import github from './github.png';
import linkedin from './linkedin.png';



export default function Footer() {
    return <div className="footer">
        <div className="socials">
            <a href="https://github.com/KiahnaCarmack"><img className="socialImage"src={github} /><span>Github</span></a>
            <a href="https://docs.google.com/document/d/1oWQiE8g2EkA1q8kfPLifCVpGPjpAo0cox61FmhuB9Ds/edit?usp=sharing"> <span>📝 Resume</span></a>
            <a href="https://www.linkedin.com/in/kiahna-carmack-85815321a/"><img className="socialImage"src={linkedin} /><span>Linkedin</span></a>
        </div>

    </div>;
}
