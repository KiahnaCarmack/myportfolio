import Pfp from './pfp.png'; 
import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef} from 'react'

export default function Intro() {
const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
             showCursor: false,
             backDelay: 1800,
              strings: ['Javascript','React.js', 'CSS','HTML','Bootstrap','JQuery','Sass','Github',
            'Node.js','Canva'] })
        return () => {
            
        };
    }, [])
    return <div className="intro" id="intro">
        <img className="photo" src={Pfp}/>
        <div className="introwrapper">
            <header>Hi There, I'm</header>

            <header>Kiahna Carmack</header>

            <header>Front End Web Developer</header>
            <div className="itype">
                <br></br>
               <span>Profficient in</span> <span className="itypetext"ref = {textRef}></span>
           </div>
          
        </div>
      

    </div>
}

