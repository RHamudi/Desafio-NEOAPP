import { Icons, Nav, Title, IconDiv } from "./style";
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function NavBar(){
    return (
        <Nav>
            <div>
                <Title>Marvel HQ'S</Title>
            </div>
            <IconDiv>
                <Icons> <AiOutlineShoppingCart /> </Icons>
            </IconDiv>
        </Nav>
    )
}