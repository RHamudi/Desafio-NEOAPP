import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Image } from './style'

export default function card({imgUrl}){
    return (
        <div>
            <Image src={imgUrl}/>
            <p>R$ 200,00</p>
            <button>Addicionar <AiOutlineShoppingCart/></button>
        </div>
    )
}