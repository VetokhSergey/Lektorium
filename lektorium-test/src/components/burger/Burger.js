import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Wrapper } from './Burger.style';
import { IoIosMenu, IoIosClose, IoIosLogOut, IoIosLogIn } from "react-icons/io";

const Burger = ({logout, logged}) => {
    const [click, setClick] = useState(false);
  return <>
        <Icon onClick={() => setClick(!click)}>{!click ? <IoIosMenu /> : <IoIosClose />}</Icon>
        <Wrapper style={{top: click ? "100%" : "-1000px", opacity: click ? 1 : 0}}>
            <List>
                <Item onClick={() => setClick(false)}><Link to="/">Home</Link></Item>
                <Item onClick={() => setClick(false)}><Link to="/createpost">Create Post</Link></Item>
                <Item onClick={() => setClick(false)}><Link to="/announcements">Announcements</Link></Item>
                {logged 
                ? <Item onClick={() => setClick(false)}><Link to="/settings">Profile</Link></Item>
                : null }
                {logged 
                    ? 
                    <Button onClick={logout}><IoIosLogOut /></Button> 
                    :
                    <Button onClick={() => setClick(false)}>
                        <Link to="/login"><IoIosLogIn /></Link>
                    </Button>}
            </List>
        </Wrapper>
        </> 
};

export default Burger;
