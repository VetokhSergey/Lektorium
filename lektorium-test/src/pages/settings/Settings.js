import React, { useContext } from 'react';
import SideBar from '../../components/sideBar/SideBar';
import { Wrapper, Setting, Title, Form, Avatar } from './Settings.style';
import { Context } from '../../context/Context';
import { AiOutlineUser } from "react-icons/ai";

const Settings = () => {
  const { user } = useContext(Context);

  return <Wrapper>
          <Setting>
            <Form>
              <Title>Profile</Title>
              {user.avatar ? <Avatar src={user.avatar} alt="avatar"/> :
              <AiOutlineUser/>}
              
              <label>Firstname</label>
              <span>{user.firstname}</span>
              
              <label>Lastname</label>
              <span>{user.lastname}</span>

              <label>Age</label>
              <span>{user.age}</span>
              
              <label>Email</label>
              <span>{user.email}</span>
            </Form>
          </Setting>
          <SideBar />
        </Wrapper>;
};

export default Settings;
