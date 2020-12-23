import { React, Component } from "react";

class BlogEachRender extends Component {
  render() {
    let { title, imageUrl, content, links } = this.props.blogs;
    console.log(links);
    return (
      <div className="blog-container">
        <div>
          {links.map((item) => {
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  this.props.getBlogById(item.id, e);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div>
          <h1>{title}</h1>
          <div className="blog-Image">
            <img src={imageUrl} alt="Blog-pi" />
          </div>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default BlogEachRender;
