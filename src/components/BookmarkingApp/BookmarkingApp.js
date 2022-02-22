import { useState } from "react";
import "../../App.css";
  
function BookmarkingApp() {
  // const [todos, setTodos] = useState([]]);
  const [bookmark, setBookmark] = useState([]);
  const [bookmarkTitle, setBookmarkTitle] = useState('');
  const [bookmarkLink, setBookmarkLink] = useState('');
  const [bookmarkTag, setBookmarkTag] = useState('');
  const [bookmarkTags, setBookmarkTags] = useState(['All tags']);
  const [tagState, setTagState] = useState('All tags')
  // setBookmark([1, 2])

  const tags = [];

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBookmark = {
      title: bookmarkTitle,
      link: bookmarkLink,
      tag: bookmarkTag,
    }

    console.log(newBookmark)
    if (!bookmarkTags.includes(newBookmark.tag)) {
      setBookmarkTags([...bookmarkTags, newBookmark.tag])
    }
    if (!(newBookmark.tag === "All tags")) {
      setBookmark([newBookmark, ...bookmark])
    }
  }

  const handleTitleInput = (e) => {
    setBookmarkTitle(e.target.value);
  }

  const handleLinkInput = (e) => {
    setBookmarkLink(e.target.value);
  }

  const handleTagInput = (e) => {
    setBookmarkTag(e.target.value);
  }

  const handleTagClick = (e) => {
    e.preventDefault();
    setTagState(e.target.textContent);
    console.log(tagState)
  }

  return (
    <>
      <h1>D: Bookmarking App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" onChange={handleTitleInput} value={bookmarkTitle} required />
        </div>
        <div>
          <label htmlFor="body">Link: </label>
          <input type="text" id="body" name="body" onChange={handleLinkInput} value={bookmarkLink} required />
        </div>
        <div>
          <label htmlFor="body">Tag: </label>
          <input type="text" id="body" name="body" onChange={handleTagInput} value={bookmarkTag} required />
        </div>
        <button type="submit" onClick={handleSubmit}>Post</button>
      </form>
      <ul className="bookmarkTags">
        Tags:
        {
          bookmarkTags.map(i => (
            <li onClick={handleTagClick}>
              {i}
            </li>
          ))
        }
      </ul>
        {
          (tagState === 'All tags')
          ?
          bookmark.map(i => (
            <>
              <ul>
                <li>
                  Title: {i.title}
                </li>
                <li>
                  Link: {i.link}
                </li>
              </ul>
              <hr />
            </>
          ))
          :
          bookmark.map(i => {
            if (i.tag === tagState) {
              return (
                <>
                  <ul>
                    <li>
                      Title: {i.title}
                    </li>
                    <li>
                      Link: {i.link}
                    </li>
                  </ul>
                  <hr />
                </>
              )
            }
          })  
        }
      {/* <BookmarkList title={title} /> */}
    </>
  )
}

export default BookmarkingApp;