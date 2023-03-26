import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { getComics } from "../../hooks/useGetComics";
import { DivMain } from "./style";
import { addCart } from '../../redux/cartSlice';
import { useFetchApi } from "../../hooks/useFetchApi";

export default function ComicInfo(){
    const {id} = useParams();
    
    const url = useFetchApi(null, id)

    const {data: comic, isLoading: loading} = useQuery(['Comic'], () => getComics(url));

    const dispatch = useDispatch();

    function addCartComic(){
        dispatch(addCart(comic));
    }
    
    if(!loading){
        return (
            <DivMain>
                <img src={comic.map(comic => comic.images[0].path + "." + comic.images[0].extension)} alt="comic"/>
                <div>
                    <h1>{comic[0].title}</h1>
                    <hr></hr>
                    {comic[0].description ? <p>Description: {comic[0].description}</p> : <p>Description not found (API)</p>}
                    <span>R$: {comic.map(comic => comic.prices).map(item => item[0].price)[0]}</span>
                    <button onClick={addCartComic}>Adicionar <AiOutlineShoppingCart/> </button>
                </div>
            </DivMain>
        )
    }
}