import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './NavBar.style';

const NavBar = () => {
  return  <>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/createpost">New <br/>Post</Link>
                <Link to="/announcements">New <br/>Announcement</Link> 
            </Navigation>
        </>;
};

export default NavBar;
