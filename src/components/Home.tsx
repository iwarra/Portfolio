import "../css/home.css"
import Header from "./Header"
import HeroSection from "./home/HeroSection"
import Skills from "./home/Skills"
import Portfolio from "./home/Portfolio"
import About from "./home/About"
import Footer from "./Footer"


const Home = () => {
  return (
    <>
      <header>
        <Header />
        <HeroSection />
      </header>
      <main className="main">
        <Skills />
        <Portfolio />
        <About />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home
