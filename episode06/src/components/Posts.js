import React, { Component } from 'react'
import {connect} from 'react-redux'
import thunk from 'redux-thunk';
import {fetchPosts} from '../actions/postAction'

 class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

   
    render() {
       
        const postItem=this.props.posts.map(post=>(
          <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
          </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        )
    }
}


const mapStateToProps=state=>({
  posts: ''
});
export default connect(mapStateToProps,{fetchPosts})(Posts) 