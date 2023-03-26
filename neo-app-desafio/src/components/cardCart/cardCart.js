import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";
import { ButtonDelete, Desc, DivCard, DivMain, Price } from "./style";

export default function CardCart({title, description, price, comic, image}){
    const dispatch = useDispatch();
    
    function remove(){
       dispatch(removeCart(comic))
    }

    return(
            <DivMain>
                <div>
                    <img src={image} alt=""/>
                </div>
                <DivCard>
                    <div>
                        {comic.premium ? <h1>Premium: {title}</h1> : <h1>{title}</h1>}
                        <Desc>{description}</Desc>
                        <Price>R$: {price}</Price>
                    </div>
                    <ButtonDelete onClick={remove}>excluir</ButtonDelete>
                </DivCard>
            </DivMain>
    )
}