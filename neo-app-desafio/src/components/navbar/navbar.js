import { Icons, Nav, Title } from "./style";

export default function NavBar(){
    return (
        <Nav>
            <div>
                <Title>Marvel HQ'S</Title>
            </div>
            <div>
                <Icons>Login</Icons>
                <Icons>cart</Icons>
            </div>
        </Nav>
    )
}