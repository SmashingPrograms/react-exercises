import { useState } from "react";
import "../../App.css";
  
function BlogApp() {
  // const [todos, setTodos] = useState([]]);
  const [blog, setBlog] = useState([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogPost, setBlogPost] = useState('');
  // setBlog([1, 2])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBlog = {
      title: blogTitle,
      description: blogPost,
    }

    console.log(newBlog)
    setBlog([newBlog, ...blog])
  }

  const handleTitleInput = (e) => {
    setBlogTitle(e.target.value);
  }

  const handlePostInput = (e) => {
    setBlogPost(e.target.value);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" onChange={handleTitleInput} value={blogTitle} required />
        </div>
        <div>
          <label htmlFor="body">Post: </label>
          <input type="text" id="body" name="body" onChange={handlePostInput} value={blogPost} required />
        </div>
        <button type="submit" onClick={handleSubmit}>Post</button>
      </form>
        {
          blog.map(i => (
            <>
              <ul>
                <li>
                  Title: {i.title}
                </li>
                <li>
                  Description: {i.description}
                </li>
              </ul>
              <hr />
            </>
          ))
        }
      {/* <BlogList title={title} /> */}
    </>
  )
}

export default BlogApp;