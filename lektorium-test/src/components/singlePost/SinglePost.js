import React, {useContext, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from '../../axiosConfig';
import {Context} from '../../context/Context';
import Comment from '../comment/Comment';
import {Author, Body, Time, Title, Wrapper, Post, ManageBlock, Input, TextArea, Button, CommentsBlock, CommentWrap} from "./SinglePost.style";
import {Image} from './SinglePost.style';
import ImageSrc from "../../assets/images/postImg.webp"
import Loader from "../loader/Loader";
import { Control } from '../posts/Posts.style';
import { IoIosCloseCircleOutline, IoMdCheckmarkCircleOutline, IoMdCreate, IoIosTrash, IoMdText } from "react-icons/io";

const SinglePost = () => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate()
    const urlId = location.pathname.split('/')[2];
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [comment, setComment] = useState('')

    useEffect(() => {
        const getPost = async() => {
            const response = await axios.get(`/664/posts/${urlId}?_expand=user`);
            setPost(response.data);
            setTitle(response.data.title);
            setBody(response.data.body);
        }
        const getComments = async() => {
          const response = await axios.get(`/664/comments?postId=${urlId}&_expand=user`);
          setComments(response.data);
        }
        getPost();
        getComments();
    }, [urlId]);

    const deleteHandler = async() => {
        try {
            await axios.delete(`/664/posts/${urlId}`);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const updateHandler = async() => {
      const data = {
        "title": title, 
        "body": body,
        "userId": user.id, 
        "createdAt": post.createdAt, 
        "updatedAt": new Date().toISOString()
      }
      try {
        await axios.patch(`/664/posts/${urlId}`, data);
            window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };

    const commentHandler = async(e) => {
      if(comment.trim() === ''){
        return;
      }
      const newComment = {
          "body": comment,
          "userId": user.id,
          "createdAt": new Date().toISOString(),
          "updatedAt": new Date().toISOString(),
          "postId" : urlId
      };
      try {
          await axios.post(`/664/comments`, newComment);
          window.location.reload();
      } catch (error) {
          console.log(error);
      };
  };

  useEffect(() => {
    if(user === null){
      setEditMode(false);
    }
},[user])

    return (
    <Wrapper>
        <Post>
          {
            post
                ? <> 
                <Image src={ImageSrc} />
                        <Author>
                          <span>Posted by: {`${post.user.firstname} ${post.user.lastname}`}</span>
                        <Time>{(new Date(post.createdAt).toDateString())}</Time>
                        </Author>
                {editMode ? <Input 
                              type="text" 
                              value={title} 
                              onChange={(e) => setTitle(e.target.value)} /> 
                              : 
                          (
                          < Title > 
                            {post.title}
                            
                            {user && user.id === post.userId ? 
                              (<ManageBlock>
                                  <Button onClick={() => setEditMode(true)}><IoMdCreate /></Button>
                                  <Button onClick={deleteHandler}><IoIosTrash /></Button>
                              </ManageBlock>)
                            : null} 
                          </Title>
                          )}
                {editMode ? 
                        (<>
                        <TextArea 
                            type="text"
                            value={body} 
                            onChange={(e) => setBody(e.target.value)} /> 
                            <Control>
                              <Button onClick={updateHandler}><IoMdCheckmarkCircleOutline /></Button>
                              <Button onClick={() => setEditMode(false)}><IoIosCloseCircleOutline /></Button>
                            </Control>
                            
                          </>)
                          : 
                        (<>
                        <Body>{post.body}</Body>
                        
                        <CommentsBlock>
                          <h3>Comments:</h3>
                          
                        {comments.map((comment) => {return <Comment key={comment.id} comment={comment} />})}
                        {user ? <CommentWrap>
                                  <input type="text" 
                                    value={comment} 
                                    placeholder="Leave your comment..."
                                    onChange={(e) => setComment(e.target.value)} 
                                  />
                                  <Button onClick={commentHandler}><IoMdText /></Button>
                                </CommentWrap>
                              : null}
                        </CommentsBlock>
                        </>)
                }
            </> 
            : <Loader/>
            }
        </Post>
    </Wrapper>
)};

export default SinglePost;
