import React, { Component } from 'react'
import { connect } from 'react-redux';

class PostDetails extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{post && post.title}</span>
              <p>{post && post.content}</p>
              <div className="card-action">
                <button onClick={() => this.props.deletePost(post && post.id)} className="btn red">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id });
    }
  }
}
export default connect(null, mapDispatchToProps)(PostDetails);
