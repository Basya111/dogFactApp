import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

export const AppHeader = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const history = useHistory()
    const pointer = { cursor: 'pointer' };

    const onToggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const goHome = () => {
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
                <MenuIcon onClick={onToggleMenu} style={pointer} className="menu-btn" />
            </header>
        </>
    )
}
