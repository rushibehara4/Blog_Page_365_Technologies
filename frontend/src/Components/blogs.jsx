import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BlogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true,
    };
  }

  fetchBlogList = async () => {
    try {
      const [postsResponse, usersResponse] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ]);

      const posts = postsResponse.data;
      const users = usersResponse.data;

      const postsWithUsers = posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return {
          ...post,
          name: user ? user.name : "Unknown",
        };
      });

      this.setState({ blogs: postsWithUsers, loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchBlogList();
  }

  onReloadButton = () => {
    window.location.reload();
  };

  render() {
    const { blogs, loading } = this.state;
    return (
      <div className="container home-container">
        <div className="d-flex flex-row justify-content-between">
          <h1 className="blog-heading">List of Blogs</h1>
          <div className="reload-con">
            <button className="reload-button-con" onClick={this.onReloadButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-clockwise reload-button"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
            </button>
          </div>
        </div>
        <div className="blogs-container">
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              {blogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                  <div>
                    <div className="d-flex flex-row justify-content-between">
                      <p className="blog-title">{blog.title}</p>
                      <Link to={`/post/${blog.id}`} className="view-all-button">
                        View All
                      </Link>
                    </div>
                    <p className="blog-body">{blog.body}</p>
                    <div className="user-name-container">
                      <p className="user-name">By: {blog.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default BlogsList;
