import { NavLink } from 'react-router'

function Header() {

	return (
		<header className="header">
			<nav className="header__nav">
				<NavLink to="/" className={({ isActive }) => 
					isActive ? "header__link header__link--active" : "header__link"
				}
					end> Comentários </NavLink>
				<NavLink to="/imagens" className={({ isActive }) => 
					isActive ? "header__link header__link--active" : "header__link"
				}
				> Imagens </NavLink>
			</nav>
		</header>
	)
}

export default Header;