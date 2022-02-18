import React, { useContext, useState, useEffect } from 'react'
import axios from '../../axiosConfig';
import { Context } from '../../context/Context'
import { Author, Input, Text, Wrapper, Control } from './Comment.style';
import { Button } from '../singlePost/SinglePost.style';
import { IoMdCreate, IoMdCheckmarkCircleOutline, IoMdClose, IoIosTrash } from "react-icons/io";

const Comment = ({comment}) => {
    const {user} = useContext(Context);
    const [editMode, setEditMode] = useState(false);
    const [body, setBody] = useState('');
    const [logged, setLogged] = useState(false);

    const deleteHandler = async() => {
        try {
            await axios.delete(`/664/comments/${comment.id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
 
    const updateHandler = async() => {
    if(body.trim() === ''){
        return;
    }
      const data = {
        "body": body,
        "updatedAt": new Date().toISOString()
      }
      try {
        await axios.patch(`/664/comments/${comment.id}`, data);
            window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        if(user && user.id === comment.userId){
        setLogged(true);
        }
        if(user === null){
          setLogged(false);
        }
        
    },[user])

  return (
    <Wrapper>
        {logged && !editMode
        ? <Control>
            <Button onClick={() => {
                setBody(comment.body);
                setEditMode(true)}}><IoMdCreate /></Button>
            <Button onClick={deleteHandler}><IoIosTrash /></Button>
        </Control>
        : null}
        {logged && editMode ? (<>
            <Input type="text" 
                value={body} 
                onChange={(e) => setBody(e.target.value)} />
            <Control>
            <Button onClick={updateHandler}><IoMdCheckmarkCircleOutline /></Button>
            <Button onClick={() => {setEditMode(false)}}><IoMdClose /></Button>
            </Control>
            
        </>)
        : (<>
        <Text>{comment.body}</Text>
        <Author>
        {`${comment.user.firstname} 
        ${comment.user.lastname} 
        ${(new Date(comment.createdAt).toDateString())}`}
        </Author>
        </>)}
    </Wrapper>
  )
}

export default Comment