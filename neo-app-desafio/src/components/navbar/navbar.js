import { Icons, Nav, IconDiv, Logo } from "./style";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom";
import ImagemLogo from '../../assets/Marvel_Logo.svg.png'

export default function NavBar(){
    return (
        <Nav>
            <div>
                <Link to="/">
                    <Logo src={ImagemLogo} alt="Logo" />
                </Link>
            </div>
            <IconDiv>
                <Link to="/cart">
                    <Icons> <AiOutlineShoppingCart /> </Icons>
                </Link>
            </IconDiv>
        </Nav>
    )
}