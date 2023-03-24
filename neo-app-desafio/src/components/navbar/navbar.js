import { Icons, Nav, Title, IconDiv } from "./style";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <Nav>
            <div>
                <Title>Marvel HQ'S</Title>
            </div>
            <IconDiv>
                <Link to="/cart">
                    <Icons> <AiOutlineShoppingCart /> </Icons>
                </Link>
            </IconDiv>
        </Nav>
    )
}