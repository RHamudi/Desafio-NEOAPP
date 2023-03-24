import { useSelector } from "react-redux";
import CardCart from "../../components/cardCart/cardCart";
import { selectCart } from "../../redux/cartSlice";
import { Section } from "./style";

export default function Cart(){
    const {comics} = useSelector(selectCart)
    
    return (
        <Section>
            <h1>Resumo Do Item</h1>
            {comics.map(comic => <CardCart comic={comic} title={comic.title} description={comic.description} price={comics.map(comic => comic.prices).map(item => item[0].price)[0]}/>)}
        </Section>
    )
}