import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/cartSlice";

export default function CardCart({title, description, price, comic}){
    const dispatch = useDispatch();
    
    function remove(){
       dispatch(removeCart(comic))
    }

    console.log(comic)

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={remove}>remove</button>
        </div>
    )
}