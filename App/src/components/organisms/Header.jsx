import { NavLink } from 'react-router'

function Header() {

	return (
		<header className="header">
			<a className="skip-link" href="#main-content">Pular para o conteúdo</a>
			<nav className="header__nav" aria-label="Navegação principal">
				<NavLink to="/" className={({ isActive }) => 
					isActive ? "header__link header__link--active" : "header__link"
				}
					end> Apresentação </NavLink>
				<NavLink to="/comentarios" className={({ isActive }) => 
					isActive ? "header__link header__link--active" : "header__link"
				}
				> Comentários </NavLink>
			</nav>
		</header>
	)
}

export default Header;
