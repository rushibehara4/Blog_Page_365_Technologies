import axios from "axios";
import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: true,
    };
  }

  fetchUserList = async () => {
    try {
      const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.setState({ userList: userData.data, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchUserList();
  }

  render() {
    const { userList, loading } = this.state;

    return (
      <div className="container">
        <div className="users-container">
          <h1 className="user-heading">User List</h1>
          {loading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          ) : (
            <ul>
              {userList.map((user) => (
                <li className="user" key={user.id}>
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default UserList;
