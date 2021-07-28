import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

export const AppHeader = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const history = useHistory()

    const onToggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const goHome = () => {
        setMenuOpen(!isMenuOpen)
        history.push('/')
    }

    return (
        <>
            <div onClick={onToggleMenu} className={`screen ${isMenuOpen ? 'screen-open' : ''}`}></div>
            <header className="app-header flex space-between container">
                <h3 onClick={goHome}>Dogie Facts</h3>
                <nav className={`nav-bar flex space-between ${isMenuOpen ? 'menu-open' : ''}`}>
                    <Link to="/" >Home</Link>
                    <Link to="/dog-fact" >Dog Facts</Link>
                    <Link to="/my-facts" >My Facts</Link>
                </nav>
                <MenuIcon onClick={onToggleMenu} className="menu-btn" className="menu-btn" />
            </header>
        </>
    )
}
