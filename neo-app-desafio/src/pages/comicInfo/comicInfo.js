import md5 from "md5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { getComics } from "../../hooks/useGetComics";
import { DivMain } from "./style";
import { addCart } from '../../redux/cartSlice';

export default function ComicInfo(){
    const {id} = useParams();
    var publickey = '24c9d051822feb3ac57093dbbf67d7de';
    var privatekey = '28a5d083127ec437d90bfc81e2ab14442a4a61d0';
    var ts = new Date().getTime();
    var stringToHash = ts + privatekey + publickey;
    var hash = md5(stringToHash);
    var baseUrl = `http://gateway.marvel.com/v1/public/comics/${id}?`;
    var url = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;

    const {data: comic, isLoading: loading} = useQuery(['Comic'], () => getComics(url));

    const dispatch = useDispatch();

    function addCartComic(){
        dispatch(addCart(comic));
    }
    
    if(!loading){
        return (
            <DivMain>
                <img src={comic.map(comic => comic.images[0].path + "." + comic.images[0].extension)} />
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