import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import BlogsList from './Components/blogs';
import UserList from './Components/user';
import PostComment from './Components/postComments';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<BlogsList />} />
        <Route path="/post/:id" element={<PostComment />} />
      </Routes>
    </Router>
  );
}

export default App;
