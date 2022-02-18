import axios from '../../axiosConfig';
import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Loader } from '../../components/loader/Loader.styles';
import { Context } from '../../context/Context';
import {Form, Input, Wrapper, LoginBtn, Title} from './Login.style';

const Login = () => {
    const {dispatch, isFetching} = useContext(Context)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorText, setErrorText] = useState("");
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        
        e.preventDefault();
        if(email.trim() === "" || password.trim() === ""){
            setError(true);
            setErrorText("Please enter your data")
            return;
        }
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post(`/login`,{
                    "email": email,
                    "password": password
            });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            localStorage.setItem('password', JSON.stringify(password))
            res.data && navigate("/");
        } catch (error) {
            setError(true);
            setErrorText("Please check your data");
            dispatch({type: "LOGIN_FAILED"})
        }
    };

    return <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={loginHandler}>
            <label>Email</label>
            <Input 
                value={email} 
                onChange={(e) => {
                    setEmail(e.target.value)
                    setError(false)
                }} 
                type="text" 
                placeholder="Enter your email..." />

            <label>Password</label>
            <Input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                }} 
                type="password" 
                placeholder="Enter your password..." />
            {error ? <span>{errorText}</span> : null}
            {isFetching 
            ? <Loader /> 
            : <LoginBtn>Log in</LoginBtn>}
            
        </Form>
        
        <Link to="/register">Register</Link>
    </Wrapper>
};

export default Login;
