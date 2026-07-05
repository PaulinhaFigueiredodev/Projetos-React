import { Link } from 'react-router'

function Header() {

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/"> Comentários </Link>
                <Link to="/imagens"> Imagens </Link>
            </nav>
        </header>
    )
}

export default Header;