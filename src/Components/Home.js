import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(
            Response => {
              
                this.setState({
                    data:Response.data.slice(0,10)
                });

            } 
        )
    }
    render(){
        const { data } = this.state;
        const post = data.length? (
            data.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <Link to={'/posts/'+post.id}>
                            <card className="title">
                                {post.title}
                            </card>
                        </Link>
                          
                            <p>{post.body}</p>
                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <p>No post</p>
            </div>
        );
        return (
            <div className="container">
                <h3 className="center">Home</h3>
                {post}
            </div>
        )
    }
}

export default Home