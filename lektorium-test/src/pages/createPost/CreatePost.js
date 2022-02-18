import axios from '../../axiosConfig';
import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SideBar from '../../components/sideBar/SideBar';
import {Context} from '../../context/Context';
import {
    Wrapper,
    Form,
    FormGroup,
    Input,
    TextArea,
    Button
} from './CreatePost.style';
import { IoMdListBox } from "react-icons/io";

const CreatePost = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const postHandler = async(e) => {
        e.preventDefault();
        if(title.trim() === '' || body.trim() === ''){
            return;
        }
        const newPost = {
            "title": title,
            "body": body,
            "userId": user.id,
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString()
        }
        try {
            await axios.post(`/664/posts`, newPost);
            navigate("/")
        } catch (error) {
            console.log(error);
        };
    }
    
    return <Wrapper>
        <Form onSubmit={postHandler}>
            <FormGroup>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                <TextArea
                    type="text"
                    placeholder="Share your story..."
                    value={body}
                    onChange={e => setBody(e.target.value)}/>
                <Button><IoMdListBox /></Button>
            </FormGroup>
        </Form>
        <SideBar/>
    </Wrapper>;
};

export default CreatePost;
