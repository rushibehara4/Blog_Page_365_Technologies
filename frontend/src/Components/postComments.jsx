import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const commentsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );

        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPostAndComments();
  }, [id]);

  if (!post) {
    return <div className="spinner-container">
      <div className="spinner"></div>
    </div>;
  }

  return (
    <div className="container home-container">
      <h1 className="comments-heading">{post.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <p>{post.body}</p>
        </div>
        <div className="col-md-6">
          <p className="comments-side-heaindg">comments</p>
          {comments.map((comment) => (
            <div className="comment-card" key={comment.id}>
              <p>{comment.body}</p>
              <p className="mail-name">by {comment.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
