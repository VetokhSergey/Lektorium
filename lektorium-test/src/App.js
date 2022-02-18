import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Header from './components/header/Header';
import CreatePost from './pages/createPost/CreatePost';
import Single from './pages/single/Single';
import Settings from './pages/settings/Settings';
import Announcements from './pages/announcements/Announcements';
import NotFound from './components/notFound/NotFound';

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={< Home />}/>
                <Route path="/announcements" element={<Announcements />
                } />
                <Route path="/login" element={< Login />}/>
                <Route
                    path="/register"
                    element={user
                    ? <Home/>
                    : <Register/>}/>
                <Route
                    path="/createpost"
                    element={user
                    ? <CreatePost/>
                    : <Login/>}/>
                <Route path="/post/:postId" element={< Single />}/>
                <Route
                    path="/settings"
                    element={user
                    ? <Settings/>
                    : <Login/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
