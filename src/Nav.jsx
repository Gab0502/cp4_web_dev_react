import {} from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'

function Nav(){
    return(
        <>
        <div id="nav">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Produtos">Produtos</NavLink>
        <NavLink to="/Sobre">Sobre</NavLink>
        </div>
        </>
    )
}
export default Nav