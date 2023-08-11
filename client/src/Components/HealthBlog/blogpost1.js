import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './blogcard.css';
import CommentForm from './CommentForm';

const BlogPost = ({ post, comments, onCommentSubmit }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Card className="post-card" src={post.image_url}>
      <Card.Img variant="top" src={post.image_url} alt={post.title} className="post-image" />
      <Card.Body>
        <Card.Title className="post-title">{post.title}</Card.Title>
        <Card.Text className="post-content">
          {showFullContent ? post.content : post.content.slice(0, 200) + '...'}
          <br />
          <button onClick={toggleContent} className="read-more-link">
            {showFullContent ? 'Read Less' : 'Read More'}
          </button>
        </Card.Text>
        <div className="comment-box">
          <button onClick={toggleComments} className="comment-button">
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
          {showComments && (
            <div className="comments-section">
              <div className="comments-title">Comments</div>
              {comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <strong>
                    {comment.user && comment.user.username ? `${comment.user.username}: ` : ''}
                  </strong>
                  {comment.content}
                </div>
              ))}
              <CommentForm postId={post.id} onSubmit={onCommentSubmit} />
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;