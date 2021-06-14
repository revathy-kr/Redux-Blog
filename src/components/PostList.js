import React, { Component } from 'react'
import PostDetails from './PostDetails'

class PostList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <PostDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default PostList
