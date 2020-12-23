import { React, Component } from "react";
import BlogCard from "./BlogCard";

import styles from "./style/Blog.module.css";

class Blog extends Component {
  state = {
    blogs: [],
  };

  componentDidMount = () => {
    const url = "https://umeshmore45.github.io/files/data.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          blogs: data,
        });
      });
  };

  render() {
    return (
      <div className={styles["blog-container"]}>
        {this.state.blogs.map((blog) => {
          return <BlogCard key={blog.id} blogs={blog} />;
        })}
      </div>
    );
  }
}

export default Blog;
