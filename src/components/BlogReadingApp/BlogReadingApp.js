import React from "react";
import { useState } from "react";
import "../../App.css";

function BlogReadingApp() {
  
  const blogs = [
    {
      title: "Executive Order 1657",
      post: "Mr. Dorsey E. Phillips of Missouri may be appointed to a clerical position or as immigrant inspector in the competitive  classified service without reference to the civil-service rules.",
    },
    {
      title: "Proclamation 5664",
      post: "Each year, for a special day and a special week during June, we take time to reflect on our flag and all it means to us. We do so in June because Old Glory was born in that month; the first distinctive American flags of the Revolution flew at the Battle of Bunker Hill in June 1775, and the Continental Congress adopted the Stars and Stripes as the flag of the United States on June 14, 1777.",
    },
    {
      title: "AKWEHOEWRkdpafsdlflpa",
      post: "The easy, careless comradeships and intimacies of the sea were drawing to their close. Fearful to lose the new friendships, so hard upon their finding, the little groups all about the decks were drawing closer together, better to share the glory of the soft, autumn ocean breezes which followed the great vessel and lulled it gently from stern to stem. And the old friends, whose accepted comradeship antedated even the sailing of the ship that long, wonderful, incomprehensible week before, gathered together, too, and seemed to face the ending of the fleeting familiarities of the sea with almost as much dismay as those who were never to see each other again.",
    }
  ];

  const [blog, setBlog] = useState(blogs[0]);

  return (
    <>
      <div class="blogSpace">
        <ul className="blogsToRead">
          {
            blogs.map(blog => (
              <li>
                <ul>
                  <li>{blog.title}</li>
                  <li>{blog.post}</li>
                  <hr />
                </ul>
              </li>
            ))
          }
        </ul>
        <ul class="blogBeingRead">
          <li>{blog.title}</li>
          <li>{blog.post}</li>
        </ul>
      </div>
    </>
  )
}

export default BlogReadingApp;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       blogs: [{
//         title: "Executive Order 1657",
//         post: "Mr. Dorsey E. Phillips of Missouri may be appointed to a clerical position or as immigrant inspector in the competitive classified service without reference to the civil-service rules.",
//       }, {
//         title: "Proclamation 5664",
//         post: "Each year, for a special day and a special week during June, we take time to reflect on our flag and all it means to us. We do so in June because Old Glory was born in that month; the first distinctive American flags of the Revolution flew at the Battle of Bunker Hill in June 1775, and the Continental Congress adopted the Stars and Stripes as the flag of the United States on June 14, 1777.",
//       }, {
//         title: "AKWEHOEWRkdpafsdlflpa",
//         post: "The easy, careless comradeships and intimacies of the sea were drawing to their close. Fearful to lose the new friendships, so hard upon their finding, the little groups all about the decks were drawing closer together, better to share the glory of the soft, autumn ocean breezes which followed the great vessel and lulled it gently from stern to stem. And the old friends, whose accepted comradeship antedated even the sailing of the ship that long, wonderful, incomprehensible week before, gathered together, too, and seemed to face the ending of the fleeting familiarities of the sea with almost as much dismay as those who were never to see each other again.",
//       }],
//       selection: null
//     }
//   };

//   toggle(index) {
//     // let blogs = [...this.state.blogs]
//     // console.log(index)
//     // let blog = {...blogs[index]};
//     // blog.active = !blog.active;
//     // blogs[index] = blog;
//     // this.setState({ blogs })
//     // let current = this.state.blogs[index]
//     // this.setState({this.current:true})
//     // console.log(this.state.blogs[index])

//     this.setState({selection: index});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <BlogList blogs={this.state.blogs} selection={this.state.selection} toggle={this.toggle} />
//       </React.Fragment>
//     )
//   }
// }

// class BlogList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // console.log(this.state)
//     const blogs = this.props.blogs.map((blog, index) => (
//       <div key={index}>
//         <h1 onClick={() => this.props.toggle(index)}>{blog.title}</h1>
//       </div>
//     ))


//     return (
//       <>
//       { blogs }
//       <article>
//         {
//           this.props.selection !== null
//           ?
//             <div>
//               <p>{this.props.blogs[this.props.selection].post}</p>
//             </div>
//           :
//           null
//         }
//       </article>
//     </>
//     )
//   }
// }

// export default BlogReadingApp;