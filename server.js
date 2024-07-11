const express = require("express");
const axios = require("axios");
const cors = require("cors")
const app = express();

app.use(cors())

// all users list
async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get(url);
  const userDetails = response.data.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    website: user.website,
  }));
  return userDetails;
}

// user list based on userid
async function getUserData(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios.get(url);
  const userData = {
    id: response.data.id,
    name: response.data.name,
    username: response.data.username,
    email: response.data.email,
    phone: response.data.phone,
    website: response.data.website,
  };
  return userData;
}

// posts based on user id
async function getPostsByUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  const response = await axios.get(url);
  return response.data;
}

// post comments based on post id
async function getPostComments(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  const response = await axios.get(url);
  return response.data;
}

// get comments based on user id
async function getCommentsByUser(id) {
  const posts = await getPostsByUser(id);
  const commentsPromises = posts.map((post) => getPostComments(post.id));
  const commentsArray = await Promise.all(commentsPromises);
  return commentsArray.flat();
}

// all posts
async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await axios.get(url);
  return response.data;
}

// post comments based on post id
async function getPostComments(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  const response = await axios.get(url);
  return response.data;
}

// get all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// posts of comments based on post id
app.get("/posts/:id/comments", async (req, res) => {
  try {
    const postComments = await getPostComments(req.params.id);
    res.send(postComments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// get user details on userid
app.get("/users/:id", async (req, res) => {
  try {
    const user = await getUserData(req.params.id);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// posts based on user id
app.get("/users/:id/posts", async (req, res) => {
  try {
    const userPosts = await getPostsByUser(req.params.id);
    res.send(userPosts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// comments based on user id
app.get("/users/:id/comments", async (req, res) => {
  try {
    const userComments = await getCommentsByUser(req.params.id);
    res.send(userComments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
