import React, {useState, useEffect} from 'react';
import axios from '../../axiosConfig';
import {List, Title, Body, Author, Time, Wrapper} from './SideBar.style';

const SideBar = () => {
    const [ann, setAnn] = useState([]);

    useEffect(() => {
        try {
            const fetchAnn = async() => {
                const response = await axios.get(`/664/announcements?_expand=user&_sort=createdAt&_order=desc`);
                setAnn(response.data);
            }
            fetchAnn();
        } catch (error) {
            console.log(error);
        }
        return () => {
            setAnn([]);
        }
    }, []);

    return (
    <Wrapper> 
        <h2>Announcements</h2>
        {
            ann.map(a => {
                return <List key={a.id}>
                            <Title>{a.title}</Title>
                            <Body>{a.body}</Body>
                            <Author>Author: {`${a.user.firstname} ${a.user.lastname}`}<br/>
                                <Time>{new Date(a.createdAt).toDateString()}</Time>
                        </Author>
                        <hr/>
                        </List>
            })
        } 
    </Wrapper>
    )
};

export default SideBar;