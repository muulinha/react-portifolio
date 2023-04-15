import Lucas from '../../../src/assets/lucas.jpg'

function About() {
  return (
    <section id="aboutme" className="aboutme">

    <h2>About Me</h2>
    <img className="image2" src={Lucas} alt="lucas"/>
    <p>
        My name is Mario Ulloa. I am a Software development student at UCSD extension. My hope is to be a full stack
        developer. Here are a few of my projects that will showcase my growth as a developer.
    </p>
</section>



  );
}

export default About;
