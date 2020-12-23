import { React, Component } from "react";
import BlogEachRender from "./BlogEachRender";
class BlogEach extends Component {
  state = {
    blogs: [],
    id: "2rvqpdbpka3n3fhd",
  };

  getBlogById = (event) => {
    console.log(event);
    this.setState({ id: event });
  };

  componentDidMount = () => {
    const url = `http://localhost:5000/blog/${this.state.id}`;
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

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.id !== prevState.id) {
      const url = `http://localhost:5000/blog/${this.state.id}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            blogs: data,
          });
        });
    }
  };

  render() {
    console.log(this.state.id);
    console.log(this.state.blogs);
    return (
      <div>
        <BlogEachRender
          getBlogById={this.getBlogById}
          blogs={this.state.blogs}
        />
      </div>
    );
  }
}

export default BlogEach;
