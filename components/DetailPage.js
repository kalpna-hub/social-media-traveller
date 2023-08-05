import React from 'react';
import { useSelector } from 'react-redux';

const DetailPage = ({ match }) => {
  const { id } = match.params;
  const post = useSelector((state) => state.posts.find((post) => post.id === parseInt(id)));

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;