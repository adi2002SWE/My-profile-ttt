import './Header.css';
import ttt from '../data/ttt-logo.PNG';
const Header=()=>{
  return (
    <div className="header">
      <header className="App-header">
        <div className="logo">
          <a href="https://www.terriblytinytales.com/" target='_newTab'><img src={ttt} alt="Logo" /></a>
        </div>
        <nav className="navigation">
          <a href="https://www.terriblytinytales.com/" target='_newTab'>Courses</a>
        </nav>
      </header>
    </div>
  )
}

export default Header;