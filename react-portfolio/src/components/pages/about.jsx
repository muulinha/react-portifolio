import Lucas from '../../../src/assets/lucas-removebg-preview.png'
import './About.css';

function About() {
  return (
    <section id="aboutme" className="aboutme">
      <h2>ABOUT ME</h2>
      <img className="profilepic" src={Lucas} alt="lucas"/>
      <p>
        Hi there, my name is Lucas Araujo. I am a full-stack web developer, holding a Bachelor’s degree in Mechanical Engineering. 
        I highly bring project management skills, leadership skills, communication skills and a lifetime working in a fast-paced high-pressure environments. 
        I recently earned a certificate in full-stack development boot camp from the University of Sydney, 
        where I developed skills in JavaScript, CSS, React.js, Node.js, responsive web design, and much more.
      </p>
    </section>
  );
}

export default About;
