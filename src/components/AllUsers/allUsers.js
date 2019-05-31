import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AllUsers extends Component {
    state = {
        users: [],
    }
    componentDidMount() {
        axios.get('/allusers')
            .then((response) => {
                console.log(response)
                const users = response.data
                this.setState({
                    users : users,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    };

    render() {
        const element = this.state.users.map ((user, index)=>{
            return (
                <div key ={index}>
                    <p>{user.username}</p>
                </div>
            )
        })
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default connect()(AllUsers);