import React from "react";
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onActionsClick}) => {
    const elements = posts.map(({id, ...post}) => {
        return (
            <PostListItem key={id} onDelete={() => onDelete(id)} onActionsClick={(action) => onActionsClick(action, id)} {...post}/>
        );
    });
    return (
        <section className="posts__list posts-list">
            <h2>Posts List</h2>
            <div className="container">
                <ul className="posts-list__list">
                    {elements}
                </ul>
            </div>
        </section>
    );
}

export default PostList;