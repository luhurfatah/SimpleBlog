import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.postID;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(Response =>
        this.setState({
          post: Response.data
        })
      );
  }

  render() {
    console.log(this.state.post);
    const post = this.state.post ? (
      <div className="container">
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.title}</p>
      </div>
    ) : (
      <div className="center">
        <p>Loading Post..</p>
      </div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
