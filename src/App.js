import BlogList from './components/BlogCMS/BlogList';
import BlogForm from './components/BlogForm/BlogForm';
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp';
import BookmarkingApp from './components/BookmarkingApp/BookmarkingApp';
import ContactForm from './components/ContactForm/ContactForm';
import {useState} from 'react';

function App() {
  const [filter, setFilter] = useState('a');
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button onClick={() => setFilter('a')}>a</button>
          </li>
          <li>
            <button onClick={() => setFilter('b')}>b</button>
          </li>
          <li>
            <button onClick={() => setFilter('c')}>c</button>
          </li>
          <li>
            <button onClick={() => setFilter('d')}>d</button>
          </li>
          <li>
            <button onClick={() => setFilter('e')}>e</button>
          </li>
        </ul>
      </nav>
      {filter === "a" && <BlogList />}
      {filter === "b" && <BlogForm />}
      {filter === "c" && <BlogReadingApp />}
      {filter === "d" && <BookmarkingApp />}
      {filter === "e" && <ContactForm />}
    </div>
  );
};

export default App;