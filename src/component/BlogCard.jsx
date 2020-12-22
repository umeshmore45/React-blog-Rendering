import { React, Component } from "react";
import styles from "./style/BlogCard.module.css";
class BlogCard extends Component {
  render() {
    return (
      <div className={styles["blog-card"]}>
        <div className={styles["blog-image"]}>
          <img src={this.props.blogs.imageUrl} alt="blog" />
        </div>
        <p id={this.props.blogs.id}>{this.props.blogs.author}</p>
        <span>{this.props.blogs.title}</span>
      </div>
    );
  }
}

export default BlogCard;
