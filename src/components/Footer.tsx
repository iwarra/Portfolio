

const Footer = () => {
  return (
      <div className='footer-content'>
        <ul className="contact" id="contact">
          <li><a href="mailto:josipovic.ivona@gmail.com" target="_blank">Email</a></li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
        <a className="scroll-up" href="#">Icon to scroll up</a>
        <span className="copyright">Copyright &copy; {new Date().getFullYear()} Ivona Josipovic</span>
      </div>
  )
}

export default Footer
