import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById, getPosts } from "../../features/Post/PostSlice";

const GetPostsSlice = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    return (
        <div>
            <button onClick={() => dispatch(getPosts())}>Получить Данные</button>
            <div>
                {posts?.map((post) => {
                    return (
                        <div
                            style={{ background: '#8000FF', padding: '20px', marginBlock: '20px', fontSize: '20px' }}
                            key={post.id}>
                            {post.title}
                            <button
                                onClick={() => dispatch(deletePostById(post.id))}
                                style={{
                                    display: 'inline', float: 'right', background: '#202020', color: 'white', width: '80px', height: '30px'
                                }}>Delete</button></div>
                    );
                })}
            </div>
        </div>
    )
}

export default GetPostsSlice