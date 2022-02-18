import React, {useEffect} from 'react';
import axios from '../../axiosConfig';
import {useState} from 'react';
import Posts from '../../components/posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [perPage] = useState(10)
    const [lastPage, setLastPage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async() => {
            const response = await axios.get(`/664/posts?_expand=user&_page=1&_limit=${perPage}&_sort=createdAt&_order=desc`);
            setPosts(response.data);
            const allPosts = await axios.get(`posts`);
            const totalPosts = Math.ceil(allPosts.data.length/perPage);
            setTotalPages(totalPosts);
            setLastPage(false);
            setLoading(false);
        };
        fetchPosts();
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setLoading(true);
            const fetchPosts = async() => {
                const response = await axios.get(`/664/posts?_expand=user&_page=${page}&_limit=${perPage}&_sort=createdAt&_order=desc`);
                setPosts([...posts, ...response.data]);
                if(totalPages <= page){
                    setLastPage(true);
                    setLoading(false);

                    return;
                };
                setLastPage(false);
                setLoading(false);
            }
            fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])
    
    return ( <>
            <Posts 
                posts={posts} 
                lastPage={lastPage}
                loading={loading}
                setPage={setPage} />
            </>
            )
};

export default Home;