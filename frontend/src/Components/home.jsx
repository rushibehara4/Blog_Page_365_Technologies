import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  jsonData = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum",
    },
  ];

  jsonData_1 = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  ];

  render() {
    return (
      <div className="container home-container">
        <div className="row">
          <h1 className="home-heading">Welcome to Blogs Application</h1>
        </div>
        <div className="row">
          <div className="d-flex flex-row">
            <button type="button" className="blog-button">
              <Link to="/posts" className="home-links">
                View List of Blogs
              </Link>
            </button>
            <button type="button" className="blog-button">
              <Link to="/users" className="home-links">
                View List of Users
              </Link>
            </button>
          </div>
        </div>
        <h1 className="assign-heading">The Application and The Assignment</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="bg-primary api-heading-con">
              <h1 className="text-white api-list-heading">
                These are the list of APIs
              </h1>
            </div>
            <div className="user-code-list">
              <p className="mb-0">Fetch All Blogs</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts
              </p>
              <p className="text-muted mt-0 mb-0">Smaple Response</p>
              <div style={{ padding: "20px" }}>
                <pre
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    padding: "10px",
                    marginLeft: "-20px",
                    marginTop: "-27px",
                    marginBottom: "-10px",
                  }}
                >
                  {JSON.stringify(this.jsonData, null, 2)}
                </pre>
              </div>
              <p className="mb-0">
                The response will be a list of blog entries, with title, body,
                id, and the userId (this is the id of the user who created this
                blog).
              </p>
            </div>
            <div className="post-code-list">
              <p className="mb-0">Fetch All Users</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/users
              </p>
              <p className="text-muted mt-0 mb-0">Smaple Response</p>
              <div style={{ padding: "20px" }}>
                <pre
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    padding: "10px",
                    backgroundColor: "transparent",
                    marginLeft: "-20px",
                    marginTop: "-27px",
                    marginBottom: "-10px",
                  }}
                >
                  {JSON.stringify(this.jsonData_1, null, 2)}
                </pre>
              </div>
              <p className="mb-0">
                the response will be array of users, have id, name, email,
                phone, website and username
              </p>
            </div>
            <div className="api-list-con">
              <p className="mb-0">Fetch Comments of a Blog , for a given id</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/id/comments
              </p>
              <p className="text-muted mb-0">
                example: To Fetch Comments of Blog with id - 2
              </p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/2/comments
              </p>
            </div>
            <div className="api-list-con api-list-bg">
              <p className="mb-0">Fetch Comments of a Blog , for a given id</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/id/comments
              </p>
              <p className="text-muted mb-0">
                example: To Fetch Comments of Blog with id - 2
              </p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/2/comments
              </p>
            </div>
            <div className="api-list-con">
              <p className="mb-0">Fetch Comments of a Blog , for a given id</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/id/comments
              </p>
              <p className="text-muted mb-0">
                example: To Fetch Comments of Blog with id - 2
              </p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/2/comments
              </p>
            </div>
            <div className="api-list-con api-list-bg">
              <p className="mb-0">Fetch Comments of a Blog , for a given id</p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/id/comments
              </p>
              <p className="text-muted mb-0">
                example: To Fetch Comments of Blog with id - 2
              </p>
              <p className="fst-italic mb-0">
                https://jsonplaceholder.typicode.com/posts/2/comments
              </p>
            </div>
            <div className="api-bot-con">
              <p className="p-2">
                Use Network Console to find any more API's that are being used
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-primary api-heading-con">
              <h1 className="text-white api-list-heading">Assignment</h1>
            </div>
            <div className="assign-para">
              <p className="mb-1 p-2">
                Go through this application in detail, understand what has been
                done
              </p>
              <hr className="mt-0 mb-0" />
              <p className="mb-1 p-2">
                try to build, as much of this application as possible
              </p>
              <hr className="mt-0 mb-0" />
              <p className="mb-1 p-2">
                You can try to build same, less or more features
              </p>
              <hr className="mt-0 mb-0" />
              <p className="mb-1 p-2">
                you are free to use any tech/platform/language
              </p>
              <hr className="mt-0 mb-0" />
              <p className="mb-1 p-2">
                You are free to build a) webapp or b) mobile app or c)desktop
                app
              </p>
              <hr className="mt-0 mb-0" />
              <p className="mb-1 p-2">
                you are build SPA (react, vue etc...) or SSR (spring boot etc)
              </p>
              <hr className="mt-0 mb-0" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
