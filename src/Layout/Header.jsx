import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header>
            <div className="header-logo">
                <img src={logo} alt="logo" />
                <h1>Fishdex</h1>
            </div>
            
            <div className="header-nav">
                <span>Home</span>
                <span>About</span>
                <span>Fish</span>
            </div>
        </header>
    )
}

export default Header;