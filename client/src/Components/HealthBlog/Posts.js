import React, { useState } from 'react';
import './posts.css'
import { Col } from 'react-bootstrap';

const Posts = ({ posts, comments, onCommentSubmit, postsPerPage, Post,  }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="posts-container">
      {currentPosts.map((post) => (
        <Col md={10} lg={5} key={post.id}>
          <Post
            post={post}
            comments={comments[post.id] || []}
            onCommentSubmit={(comment) => onCommentSubmit(post.id, comment)}
          />
        </Col>
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;