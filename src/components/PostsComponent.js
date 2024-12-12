// src/components/PostsComponent.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, createPost } from '../features/post/postsSlice';

const PostsComponent = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    if (newPost.title && newPost.body) {
      dispatch(createPost(newPost));
      setNewPost({ title: '', body: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
      <h2>Create New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      ></textarea>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default PostsComponent;
