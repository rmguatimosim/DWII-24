import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <ul>
            
            {/* <li> <Link to="/">Home</Link>|</li>
            <li> <Link to="/pag1">Página 1</Link>|</li>
            <li> <Link to="/pag2">Página 2</Link>|</li> */}

            <li> <NavLink className={({isActive})=> isActive ? 'activeLink' : 'undefined'} to="/">Home</NavLink>|</li>
            <li> <NavLink className={({isActive})=> isActive ? 'activeLink' : 'undefined'} to="/pag1">Página 1</NavLink>|</li>
            <li> <NavLink className={({isActive})=> isActive ? 'activeLink' : 'undefined'} to="/pag2">Página 2</NavLink>|</li>

        </ul>
    )
}

export default Nav