// install "npm i date-fns" in terminal
import logo from './logo.svg';
import './App.css';
import { PostList } from './feature/posts/postList';
import { AddPostForm } from './feature/posts/addPostForm';

function App() {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
