import React, { Component } from 'react'

class PostDetails extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Post One</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia illo optio amet doloribus voluptates, quis quidem fugit porro necessitatibus corrupti earum aut esse quam aliquam dolor ipsa cum praesentium.</p>
            <div className="card-action">
              <button className="btn red">
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

export default PostDetails
