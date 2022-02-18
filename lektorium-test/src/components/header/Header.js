import { AuthBlock, Button, Logo, Wrapper, LoggedBlock, UserName, Container } from "./Header.style";
import LogoUrl from "../../assets/images/bebo.png";
import Burger from "../burger/Burger";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import { Context } from "../../context/Context";
import { IoIosLogIn } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
    const { user, dispatch } = useContext(Context);
    const [logged, setLogged]= useState(false);
    
    useEffect(() => {
        user ?
        setLogged(true) :
        setLogged(false);
    },[user]);

    const logoutHandler = () => {
        dispatch({type: "LOGOUT"});
        localStorage.setItem('password', null)
        setLogged(false);
    }
     
    return(
        <Container>
        <Wrapper>
            <Link to="/"><Logo src={LogoUrl} /></Link>
            <NavBar />
            {logged ? 
                (<LoggedBlock>
                    <Link to="/settings">
                    <UserName>{`${user.firstname} ${user.lastname}`}</UserName>
                    </Link>
                    <Button onClick={logoutHandler}><BiLogOut /></Button>
                    <Burger logout={logoutHandler} logged={logged}/>
                </LoggedBlock>)
                : 
                (<AuthBlock>
                    <Button><Link to="/register">Register</Link></Button>
                    <Button><Link to="/login"><IoIosLogIn /></Link></Button>
                    <Burger />
                </AuthBlock>)
        }
        </Wrapper>
        </Container>
    )
}

export default Header;