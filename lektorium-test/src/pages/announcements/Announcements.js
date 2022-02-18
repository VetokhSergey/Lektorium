import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../context/Context';
import axios from '../../axiosConfig';
import {
    Wrapper,
    Container,
    Heading,
    Input,
    TextArea,
    Edit,
    LoaderWrap,
} from './Announcements.style';
import Loader from "../../components/loader/Loader"
import Announcement from '../../components/announcement/Announcement';
import GoUp from '../../components/goUp/GoUp';
import { IoIosAdd, IoIosClose, IoMdListBox } from "react-icons/io";
import { Button } from '../createPost/CreatePost.style';


const Announcements = () => {
    const {user} = useContext(Context);
    const [announcements, setAnnouncements] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchAnn = async() => {
        const response = await axios.get(`/664/announcements?_expand=user&_sort=createdAt&_order=desc`);
        setAnnouncements(response.data);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true)
        fetchAnn();
    }, [user])

    const addHandler = async() => {
        if(title.trim() === "" || body.trim() === ""){
            return;
        };
    
        const data = {
            "title": title,
            "body": body,
            "userId": user.id,
            "createdAt": new Date().toISOString(),
            "updatedAt": new Date().toISOString()
        }
    
        try {
            await axios.post(`/664/announcements`, data);
            setEditMode(false);
            setTitle('');
            setBody('');
            setLoading(true);
            fetchAnn();
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        {loading ? 
        <LoaderWrap>
            <Loader />
        </LoaderWrap> 
        : 
        <Container>
            <Heading>
            <h2>Announcements</h2>
                {user
                ? <Button onClick={() => setEditMode(!editMode)}>{!editMode 
                    ? <IoIosAdd />
                    : <IoIosClose />}</Button>
                : <h3>Log in to add announcement</h3>}
            </Heading>
        {editMode && user
            ? (
                <Edit>
                    <Input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    <TextArea
                        type="text"
                        placeholder="Description"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}/>
                    <Button onClick={addHandler}><IoMdListBox /></Button>
                </Edit>
            )
            : null}
        <Wrapper>
            {announcements.map(a => {
                return <Announcement key={a.id} announcement={a} />
            })}
        </Wrapper>
        <GoUp />
    </Container>
        }
        </>
};

export default Announcements;