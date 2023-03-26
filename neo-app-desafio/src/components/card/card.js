import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cartSlice';
import { Image, DivMain, Button, Title } from './style'

export default function Card({imgUrl, title, price, comic}){
    const dispatch = useDispatch();

    function addCartComic(){
        dispatch(addCart([comic]));
    }

    return (
        <DivMain>
            <Link to={`/comicInfo/${comic.id}`}>
                <Image src={imgUrl}/>
                {comic.premium ? <Title premium>Premium: {title}</Title> : <Title>{title}</Title>}
                <p>R$ {price}</p>
            </Link>
            <Button onClick={addCartComic}>Addicionar <AiOutlineShoppingCart/></Button>
        </DivMain>
    )

}