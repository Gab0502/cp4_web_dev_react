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
        
        <img src = {imgtinto} alt="tinto" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Tinto</label>
        
        
        <img src = {imgbranco} alt="branco" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Branco</label>
        
        <img src = {imgespumante} alt="espumante" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Espumante</label>

        <img src = {imgrose} alt="rose" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Rose</label>
        </div>
        </>
    )
}
export default Produtos