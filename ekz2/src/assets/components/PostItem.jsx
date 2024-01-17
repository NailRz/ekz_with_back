import React, { useState } from 'react';

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
				<div className="post__content">
					<div className="title">{props.post.title}</div>
					<div>{props.post.body}</div>
					<button onClick={() => props.remove(props.post)}>delete</button>

				</div>
			</div>
        </div>
    );
};

export default PostItem;