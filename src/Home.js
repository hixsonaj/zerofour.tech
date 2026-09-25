import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Blog_Section from './Blog_Section.js';
import './Home.css';

export default function Home() {
  return (
    <div className='Home_Container'>
      <img
        className="Alex_Hixson2"
        src={'/project_images/Alex_Hixson2.png'}
        alt={'Alex Hixson'}/>
      <h1>ZERO FOUR TECH</h1>
      <p>A Development Tool</p>
      <p>From Alex Hixson</p>
      <a href="https://linkedin.com/in/hixsonaj"><FontAwesomeIcon icon={faLinkedin} className="Icon_Linkedin" /></a>
      <Link to={"/contact"} style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faEnvelope} className="Icon_Email" /></Link>
      <a href="https://github.com/hixsonaj"><FontAwesomeIcon icon={faGithub} className="Icon_GitHub" /></a>
      <div className="Projects">
        <Link to={"/projects"} style={{ textDecoration: 'none' }}><h3 style={{textDecoration: 'underline'}}>Leading Projects</h3></Link>
        <Link to={"/projects/volume_by_speed"} style={{ textDecoration: 'none' }}><h3>{"Volume by Speed"}</h3></Link>
        <Link to={"/projects/alexhixson_com"} style={{ textDecoration: 'none' }}><h3>{"alexhixson.com"}</h3></Link>
      </div>
      <Blog_Section/>
    </div>
  );
}