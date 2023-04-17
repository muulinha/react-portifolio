import Lucas from '../../../src/assets/lucas-removebg-preview.png'
import './About.css';

function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h1 className='page-header'>About Me</h1>
      <div className='profile'>
      <img className="profilepic" src={Lucas} alt="lucas"/>
      <p className='about-text'>
        Hi there, my name is Lucas Araujo. I am a full-stack web developer, holding a Bachelor’s degree in Mechanical Engineering. 
        I highly bring project management skills, leadership skills, communication skills and a lifetime working in a fast-paced high-pressure environments. 
        <br></br><br></br>I recently earned a certificate in full-stack development boot camp from the University of Sydney, 
        where I developed skills in JavaScript, CSS, React.js, Node.js, responsive web design, and much more.
      </p>
      </div>
    </section>
  );
}

export default About;
