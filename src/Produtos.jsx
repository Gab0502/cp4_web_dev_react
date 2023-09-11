import {} from 'react'
import './Produtos.css'
import imgtinto from './images/vinho_tinto.jpg'
import imgbranco from './images/vinho_branco.jpg'
import imgespumante from './images/vinho_espumante.jpg'
import imgrose from './images/vinho_rose.jpg'

function Produtos(){
    return(
        <>
        <div id="container-produtos">
        <h3>VINHO TINTO</h3>
        <img src = {imgtinto} alt="tinto" width = "1000px" heigth = "1000px"/>
        
        <h3>VINHO BRANCO</h3>
        <img src = {imgbranco} alt="branco" width = "1000px" heigth = "1000px"/>
        
        <h3>VINHO ESPUMANTE</h3>
        <img src = {imgespumante} alt="espumante" width = "1000px" heigth = "1000px"/>
        
        <h3>VINHO ROSE</h3>
        <img src = {imgrose} alt="rose" width = "1000px" heigth = "1000px"/>
        </div>
        </>
    )
}
export default Produtos