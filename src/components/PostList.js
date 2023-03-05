import { useLoaderData } from 'react-router-dom';


import Post from "./Post";
import classes from "./PostList.module.css"

function PostList() {
    const posts = useLoaderData();
    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} id={post.id} body={post.body} author={post.author} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are No any Posts yet</h2>
                    <p>Start Write somthing</p>
                </div>
            )}
        </>
    );
}

export default PostList;