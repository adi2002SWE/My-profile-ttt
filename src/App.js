import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Post from './components/Post';
import './App.css';
import comments from './data/comments';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Profile />
      <div className='post'>
        <h2>134 Posts</h2>
        <hr className='post-hr'/>
      </div>
      {comments.map((val)=>
        <Post title={val.title}
          desc={val.desc}
          name={val.name}
          nameBy={val.nameBy}
          views={val.views}
        />
      )}
    </div>
  );
}

export default App;
