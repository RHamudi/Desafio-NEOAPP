import { useSelector } from "react-redux";
import CardCart from "../../components/cardCart/cardCart";
import { selectCart } from "../../redux/cartSlice";
import { DivCart, DivCarts, DivPrice, DivResumo, Resumo, Section, Title } from "./style";

export default function Cart(){
    const {comics, count} = useSelector(selectCart)
    
    const subtotal = comics.map(comic => comic.prices).map(item => item[0].price)
    const initialValue = 0;
    const sumWithInitial = subtotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    console.log(sumWithInitial)

    return (
        <Section>
            <Title>Resumo Do Carrinho ({count})</Title>
            <hr></hr>
            <DivCart>
                <DivCarts>
                    {comics.map(comic => <CardCart image={comic.images[0].path + "." + comic.images[0].extension} comic={comic} title={comic.title} description={comic.description} price={comics.map(comic => comic.prices).map(item => item[0].price)[0]}/>)}
                </DivCarts>
                <Resumo>
                    <DivResumo>
                        <h1>Resumo do pedido</h1>
                    </DivResumo>
                    <DivPrice>
                        <div>
                            <p>Subtotal: </p> <p>R$ :{sumWithInitial}</p>
                        </div>
                        <input type="text" />
                    </DivPrice>
                    <button>Comprar</button>
                </Resumo>
            </DivCart>
        </Section>
    )
}