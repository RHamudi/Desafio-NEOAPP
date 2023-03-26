import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CardCart from "../../components/cardCart/cardCart";
import { selectCart } from "../../redux/cartSlice";
import { ButtonAdicionar, DivCart, DivCarts, DivPrice, DivResumo, Resumo, Section, Title } from "./style";

export default function Cart(){
    const {comics, count} = useSelector(selectCart)
    const [input, setInput] = useState();
    const [sumWithInitial, setSumWithInitial] = useState();
    const [cupomUse, setCupomUse] = useState(false);

    const cupom = {
        premium: "PREMIUM10",
        comum: "COMUM20"
    }
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        const subtotal = comics.map(comic => comic.prices).map(item => item[0].price)
        const initialValue = 0;
        setSumWithInitial(subtotal.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
            ).toFixed(2));
    }, [comics]);
    
    function notify(msg, type){
        if(type === true){
            toast.success(msg, {className: "notify"})
        } else {
            toast.error(msg, {className: "notify"})
        }
        };
    
    function discount(){
        let discount;
        if(cupomUse === false){
            if(input === cupom.premium && comics.map(item => item.hasOwnProperty("premium")).includes(true) === true){
                discount = sumWithInitial * 0.1; 
                setSumWithInitial(parseFloat((sumWithInitial - discount).toFixed(2)));
                setInput('');
                setCupomUse(true);
                notify("Cupom premium adicionado!", true)
            } else if(input === cupom.comum) {
                discount = sumWithInitial * 0.2; 
                setSumWithInitial(parseFloat((sumWithInitial - discount).toFixed(2)));
                setInput('');
                setCupomUse(true);
                notify("Cupom comum adicionado!", true)
            } else if (input !== cupom.premium || input !== cupom.premium){
                notify("Cupom invalido, tente outro", false)
            } else if (comics.map(item => item.hasOwnProperty("premium")).includes(true) === false && input === cupom.premium){
                notify("Não é possivel utilziar esse cupom, seu carrinho não contem item premium", false)
            }
        } else {
            notify("Voce ja utilizou um cupom", false)
        }
    }
    
    if(comics.length > 0){
        return (
            <Section>
                <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light" />
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
                            <span>
                                Cupom desconto: <input type="text" value={input} onChange={handleChange} /> <button onClick={discount}>Aplicar</button>
                            </span>
                        </DivPrice>
                        <ButtonAdicionar>Comprar</ButtonAdicionar>
                    </Resumo>
                </DivCart>
            </Section>
        )
    } else {
        return (
            <Section >
                <DivCart false>
                    <Title>Não Contem Itens No Carrinho</Title>
                </DivCart>
            </Section>
        )
    }
}