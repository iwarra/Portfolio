import "../../css/hero.css"

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-text">
        <h1>Hi, my name is Ivona!</h1>
        <h2>I am a front-end developer based in Stockholm.</h2>
        <p>Add more interesting text as a short introduction here...</p>
        <button className="cta"><a href="#contact">Get in touch</a></button>
      </div>
      <aside><img className="hero-img" src="./public/test.jpg" alt="photo of Ivona Josipovic"/></aside>
    </section>
  )
}

export default HeroSection;
