import { Link } from 'react-router'

function Header() {

    return (
        <header className="header-component">
            <nav className="header__nav" aria-label="Navegação principal">
                <Link to="/"> Comentários </Link>
                <Link to="/imagens"> Imagens </Link>
            </nav>
        </header>
    )
}

export default Header;