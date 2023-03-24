import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cartSlice';
import { Image, DivMain, Button } from './style'

export default function Card({imgUrl, title, price, comic}){
    const dispatch = useDispatch();

    function addCartComic(){
        dispatch(addCart([comic]));
    }

    if(comic.premium)
    {
        return (
            <DivMain premium>
                <Link to={`/comicInfo/${comic.id}`}>
                    <Image src={imgUrl}/>
                    <h2>Premium: {title}</h2>
                    <p>R$ {price}</p>
                </Link>
                <Button onClick={addCartComic}>Addicionar <AiOutlineShoppingCart/></Button>
            </DivMain>
        )
    } else {
        return (
            <DivMain>
                <Link to={`/comicInfo/${comic.id}`}>
                    <Image src={imgUrl}/>
                    <h2>{title}</h2>
                    <p>R$ {price}</p>
                </Link>
                <Button onClick={addCartComic}>Addicionar <AiOutlineShoppingCart/></Button>
            </DivMain>
        )
    }
}