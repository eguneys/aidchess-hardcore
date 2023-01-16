import "./about.scss"
import { Title } from '@solidjs/meta'

const About = () => {

  return (<>
   <Title> aidchess.com - About </Title>
   <div class="about">
     <h2> About </h2>
     <p> aidchess.com is a website about chess.</p>
     <p> It is entirely free, and open to anyone.</p>
     <p> Feature requests are welcome and appreciated via <a href="https://github.com/eguneys/aidchess-hardcore">Github</a>. </p>
     <p> Support the project by donating to my personal <a href="https://www.patreon.com/eguneys">Patreon</a>.</p>
   </div>
</>)
}


export default About
