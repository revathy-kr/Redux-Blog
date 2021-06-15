import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
class AddPost extends Component {
  state = {
    post: {
      id: "",
      title: "",
      content: "",
    }
  }

  handleOnChange = (e) => {
    this.setState({
      post: {
        ...this.state.post,
        id: uuidv4(),
        [e.target.name]: e.target.value,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      post: {
        id: "",
        title: "",
        content: "",
      }
    });
    this.props.createPost(this.state.post);
  }

  render() {
    return (
      <div className="container" style={{ margin: "4rem auto" }}>
        <h5 className="blue-text center-align">Rev Blog</h5>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <label htmlFor="post_title">Title</label>
            <input onChange={this.handleOnChange} value={this.state.post.title} type="text" name="title" />
          </div>
          <div className="input-field">
            <label htmlFor="post_content">Content</label>
            <textarea onChange={this.handleOnChange} value={this.state.post.content} name="content" id="" className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch({ type: "ADD_POST", post });
    }
  }
}

export default connect(null, mapDispatchToProps)(AddPost)
