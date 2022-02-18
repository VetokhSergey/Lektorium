import React from "react";
import { Link } from "react-router-dom";
import { Author, Time, Title, Wrapper, Image, Body } from "./Post.style";
import ImageSrc from "../../assets/images/postImg.webp"

const Post = ({post}) => {
  
  return (
    <Wrapper>
      <Link to={`/post/${post.id}`}>
      <Image src={ImageSrc}/>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      </Link>
      <Author>
        <span>Posted by: {`${post.user.firstname} ${post.user.lastname}`}</span>
        <br/>
        <Time>{(new Date(post.createdAt).toDateString())}</Time>
        </Author>
    </Wrapper>
  );
};

export default Post;
