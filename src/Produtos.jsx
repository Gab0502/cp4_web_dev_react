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
        <div>
        <img src = {imgtinto} alt="tinto" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Tinto</label>
        </div>
        <div>
        <img src = {imgbranco} alt="branco" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Branco</label>
        </div>
        <div>
        <img src = {imgespumante} alt="espumante" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Espumante</label>
        </div>
        <div>
        <img src = {imgrose} alt="rose" width = "1000px" heigth = "1000px"/>
        <label>Produto: Vinho Rose</label>
        </div>
        </div>
        </>
    )
}
export default Produtos