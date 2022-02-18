import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from '../../axiosConfig';
import {
    Form,
    Input,
    Wrapper,
    RegisterBtn,
    Title,
    Block,
    Select,
    Man,
    Woman,
} from './Register.style';

const Register = () => {
    const [first,
        setFirst] = useState("");
    const [last,
        setLast] = useState("");
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");
    const [confirmPwd, 
        setConfirmPwd] = useState("");
    const [age,
        setAge] = useState("");
    const [avatar,
        setAvatar] = useState("");
    const [error,
        setError] = useState(false);
    const navigate = useNavigate()

    const registerHandler = async(e) => {
        e.preventDefault();
        setError(false);
        if(password !== confirmPwd || age <= 0 || age > 110){
            return;
        };
        try {
            const data = {
                "id": Date.now().toString(),
                "firstname": first,
                "lastname": last,
                "email" : email,
                "password": password,
                "age" : age,
                "avatar": avatar
            };
            const res = await axios.post(`/register`, data);  
            res.data && navigate("/login");
        } catch (error) {
            setError(true);
        }
    }

    return <> 
      <Wrapper>
        <Title>Register</Title>
        <Form onSubmit={registerHandler}>
            <Block>
                <label>First name</label>
                <Input
                    type="text"
                    placeholder="Enter your first name..."
                    value={first}
                    onChange={e => setFirst(e.target.value)}
                    required={true}/>
                <label>Last name</label>
                <Input
                    type="text"
                    placeholder="Enter your last name..."
                    value={last}
                    onChange={e => setLast(e.target.value)}
                    required={true}/>
            </Block>
            <Block>
                <label>Email</label>
                <Input
                    type="text"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required={true}/>
                <label>Age</label>
                <Input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    required={true}/>
                
            </Block>
            <Block>
                <label>Password</label>
                <Input
                    type="password"
                    placeholder="Create password..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required={true}/>
                <label>Confirm</label>
                <Input
                    type="password"
                    placeholder="Confirm password..."
                    value={confirmPwd}
                    onChange={e => setConfirmPwd(e.target.value)}
                    required={true}/>    
            </Block>
            { password.trim() === confirmPwd.trim() 
            || age <= 0 
            ? 
            null 
            : 
            <span style={{color: "red"}}>Please enter correct data</span>}
            <Select required>
                <Man><input
                    type="radio"
                    name="avatar"
                    value="https://cdn.icon-icons.com/icons2/39/PNG/128/user_person_people_6100.png"
                    onChange={e => setAvatar(e.target.value)}/></Man>
                <Woman><input
                    type="radio"
                    name="avatar"
                    value="https://cdn.icon-icons.com/icons2/39/PNG/128/userkdmfemale_person_woman_5920.png"
                    onChange={e => setAvatar(e.target.value)}/></Woman>
            </Select>
            <RegisterBtn type="submit">Register</RegisterBtn>
            {error && <span style={{fontSize: 20, color: "red"}}>Something went wrong...</span>}
        </Form>
        <Link to="/login">Login</Link>
    </Wrapper> 
    </>
};

export default Register;