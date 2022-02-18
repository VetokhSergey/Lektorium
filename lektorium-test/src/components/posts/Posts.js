import React from "react";
import Post from "../post/Post";
import SideBar from "../sideBar/SideBar";
import { Item, List, Wrapper, Control } from "./Posts.style";
import { Button } from "../../pages/createPost/CreatePost.style";
import GoUp from "../goUp/GoUp";
import Loader from "../loader/Loader";
import { AiOutlineReload } from "react-icons/ai";

const Posts = ({posts, lastPage, setPage, loading}) => {

  return (
    <Wrapper>
      <List>
      {posts.map(post => { return <Item key={post.id}>
                                      <Post post={post} />
                                  </Item>})}
      </List>
      <SideBar />
      <Control>
            {loading ? <Loader/> : 
            <Button disabled={lastPage} onClick={() => setPage(prev => prev + 1)}><AiOutlineReload /></Button>
            }
      </Control>
      <GoUp />
    </Wrapper>)
};

export default Posts;
