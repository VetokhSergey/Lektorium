import React, { useState, useContext, useEffect } from 'react'
import axios from '../../axiosConfig';
import { Context } from '../../context/Context';
import { Title, Body, Author, Time, Wrapper, Input, TextArea, Button, ManageBlock } from './Announcement.style';
import { IoMdCreate, IoMdCheckmarkCircleOutline, IoMdClose, IoIosTrash } from "react-icons/io";
import { Control } from '../posts/Posts.style';

const Announcement = ({announcement}) => {
  const {user} = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [logged, setLogged] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const updateHandler = async() => {
    const data = {
        "title": title,
        "body": body,
        "userId": user.id,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString()
    };

    try {
        await axios.patch(`/664/announcements/${announcement.id}`, data);
        window
            .location
            .reload();
    } catch (error) {
        console.log(error);
    };
  };

  const deleteHandler = async() => {
    try {
        await axios.delete(`/664/announcements/${announcement.id}`);
        window.location.reload();
    } catch (error) {
        console.log(error);
    };
  };

  const manageHandler = () => {
    setBody(announcement.body);
    setTitle(announcement.title);
    setEdit(true);
  }

  useEffect(() => {
      if(user && user.id === announcement.userId){
      setLogged(true);
      }
      if(user === null){
        setLogged(false);
      }
      
  },[user])

  return <Wrapper>
      {edit && logged ? 
      <>
          <Input 
            type="text" 
            value={title}
            onChange={(e) => {setTitle(e.target.value)}} /> 
          <TextArea 
            type="text"
            value={body} 
            onChange={(e) => {
            setBody(e.target.value)}} /> 
          <Control>
          <Button onClick={updateHandler}><IoMdCheckmarkCircleOutline /></Button>
          <Button onClick={() => {
            setTitle('');
            setBody('');
            setEdit(false);
            }}><IoMdClose /></Button>
            </Control>
        </>
        :
        <>
        {user && logged
          ? <ManageBlock>
               <Button onClick={manageHandler}><IoMdCreate /></Button>
                <Button onClick={deleteHandler}><IoIosTrash /></Button>
              </ManageBlock>
            : null}
          <Title>{announcement.title}</Title>
          <Body>{announcement.body}</Body>
          <Author>Author: {`${announcement.user.firstname} ${announcement.user.lastname}`}<br/>
          <Time>{new Date(announcement.createdAt).toDateString()}</Time>
          </Author>
        </>
        } 
  </Wrapper>  
}

export default Announcement;