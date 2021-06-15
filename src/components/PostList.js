import React, { Component } from 'react'
import PostDetails from './PostDetails'
import { connect } from "react-redux";
class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            {
              posts && posts.map((post) => <PostDetails post={post} key={post && post.id} />)
            }
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(PostList);
