import { useState } from "react";


function BlogDetail(props) {
  const {blog} = props;
  
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);

  const handleSave = () => {
    props.handleChange(props.index, title, description);
    setEditing(false);
    
  }
  
  
  const detailsHTML = (
    <li>
      <p>Title: </p>
      <p data-name='title' onChange={props.handleChange}>{blog.title}</p>
      <p>Description: </p>
      <p data-name='description' onChange={props.handleChange}>{blog.description}</p>
      <button type="button" onClick={() => setEditing(true)}>Edit</button>
      <button type="button" onClick={() => props.handleDelete(props.index)}>Delete</button>
    </li>
  )

  const editingHTML = (
    <li>
      <label>Title: </label>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description: </label>
      <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="button" onClick={handleSave}>Save</button>
      <button type="button" onClick={() => setEditing(false)}>Cancel</button>
    </li>
  )
  
  
  return(
    <>
     {isEditing ? editingHTML : detailsHTML}
    </>
  )
}

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogPost, setBlogPost] = useState('');
  // setBlog([1, 2])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBlog = {
      title: blogTitle,
      description: blogPost,
    }

    // console.log(newBlog)
    setBlogs([newBlog, ...blogs])
  }

  const handleTitleInput = (e) => {
    setBlogTitle(e.target.value);
  }

  const handlePostInput = (e) => {
    setBlogPost(e.target.value);
  }

  const handleDelete = (index) => {
    const blogsCopy = [...blogs];
    blogsCopy.splice(index, 1);
    setBlogs(blogsCopy);
  }

  const handleChange = (index, title, description) => {
    const blogsCopy = [...blogs];
    blogsCopy[index] = {...blogsCopy[index], title, description}
    setBlogs(blogsCopy);
  }

  // function editPost(func) {
  //   return (
  //     <form className="form" onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="title">Title: </label>
  //         <input type="text" id="title" name="title" onChange={set} value={blogTitle} required />
  //       </div>
  //       <div>
  //         <label htmlFor="body">Post: </label>
  //         <input type="text" id="body" name="body" onChange={handlePostInput} value={blogPost} required />
  //       </div>
  //       <button type="submit" onClick={handleSubmit}>Post</button>
  //   )
  // }

  const blogPostsHTML =  blogs.map((blog, index) => (
      <BlogDetail key={index} index={index} blog={blog} handleDelete={handleDelete} handleChange={handleChange} />
    ));

  return (
    <>
      <h1>E: Blog List</h1>
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
      <ul>
        {blogPostsHTML}
      </ul>
       
      {/* <BlogList title={title} /> */}
    </>
  )
}

export default BlogList;